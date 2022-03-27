const axios = require('axios');

const getShowSearch = async function getShowSearch(showSearchTerm) {
    const {data} = await axios.get(`http://api.tvmaze.com/search/shows?q=${showSearchTerm}`);
    return data.slice(0,5);
};

module.exports = {
    getShowSearch
};