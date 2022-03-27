const axios = require('axios');

const getShow = async function getShow(id) {
    const {data} = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    return data;
};

module.exports = {
    getShow
};