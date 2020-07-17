import moment from "moment";

//remove special characters
function rmSpCh(string) {
    return encodeURIComponent(string).replace("%20", "+");
}

export function fetchJobs(url, dispatch) {
    dispatch({
        type: "FETCH_JOBS",
    });

    fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": "SameSite=None; Secure",
            },
        })
        .then((data) => {
            console.log(data)
            return data.json();
        })
        .then((response) => {
            console.log(response)
            dispatch({
                type: "SET_JOBS",
                jobs: response,
            });
        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type: "ERROR",
                error: "Something went wrong. Please try again.",
            });
        });
}

export function urlBuilder(description, location, fullTime, page, lat, long) {

    let GITHUB_URL = `https://jobs.github.com/positions.json?description=${rmSpCh(
    description
  )}&full_time=${fullTime}&page=${page}&location=${rmSpCh(location)}`;

    if (lat && long) {
        GITHUB_URL = `https://jobs.github.com/positions.json?description=${rmSpCh(
      description
    )}&full_time=${fullTime}&page=${page}&lat=${lat}&long=${long}`;
    }

    return GITHUB_URL;
}

export function formatDays(daysPassed) {
    daysPassed = moment().diff(new Date(daysPassed), "days");

    if (daysPassed > 0 && daysPassed < 30) {
        return daysPassed + " day(s) ago";
    }

    if (daysPassed > 30) {
        return 30 + "+ day(s) ago";
    }

    return "Just posted";
}