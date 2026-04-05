const axios = require("axios");

exports.fetch = async (uid) => {
    const baseURL = process.env.TARGET_API;

    const response = await axios.get(baseURL, {
        params: { id: uid },
        timeout: 8000
    });

    return response.data;
};
