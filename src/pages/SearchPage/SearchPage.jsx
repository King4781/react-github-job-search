import React from "react";

//components
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import Location from "../../components/Location/Location";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = () => {
  return (
    <Layout main={<SearchResults />} sideBar={<Location />}>
      <Search />
    </Layout>
  );
};

export default SearchPage;
