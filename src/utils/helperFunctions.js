import moment from "moment";

//remove special characters
function rmSpCh(string) {
    return encodeURIComponent(string).replace("%20", "+");
}

export function fetchJobs(url, dispatch) {
    dispatch({
        type: "FETCH_JOBS",
    });

    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            console.log(response);
            dispatch({
                type: "SET_JOBS",
                jobs: response,
            });
        })
        .catch((error) => {
            console.error(error);
            dispatch({
                type: "ERROR",
                error: "Something went wrong. Please try again.",
            });
        });
}

export function paginate(array, page_size, page_number) {
    const start = (page_number - 1) * page_size;
    const end = page_number * page_size;
    return array.slice(start, end);
}

export function urlBuilder(description, location, fullTime) {
    //Development URL
    //let URL = `http://localhost:8000/jobs?${rmSpCh(description)}&location=${rmSpCh(location)}&full_time${fullTime}`;

    //Production URL
    let URL = `/jobs?description=${rmSpCh(
    description
    )}&full_time=${fullTime}&location=${rmSpCh(location)}`;

    return URL;
}

export function formatDays(daysPassed) {
    daysPassed = moment().diff(new Date(daysPassed), "days");

    if (daysPassed > 1 && daysPassed < 30) {
        return daysPassed + " days ago";
    }

    if (daysPassed > 29) {
        return 30 + "+ days ago";
    }

    if (daysPassed === 1) {
        return daysPassed + " day ago";
    }

    return "Just posted";
}

export function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + ' ...' : str;
  };