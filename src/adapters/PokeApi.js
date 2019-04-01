const axios = require("axios");
const confPokeApi = require('../config/ConfigPokeApi');
const instance = axios.create(confPokeApi);

let byNameOrId = (name) => {
    return new Promise((resolve, reject) => {
        instance.interceptors.response.use(
            response => {
                return resolve(response.data);
            },
            error => {
                return reject(error);
            }
        );
        instance.request(`pokemon/${name}/`);
    });
}

let All = (limit = 10, offset = 0) => {
    return new Promise((resolve, reject) => {
        instance.interceptors.response.use(
            response => {
                return resolve(response.data);
            },
            error => {
                return reject(error);
            }
        );
        instance.request(`pokemon?limit=${limit}&offset=${offset}`);
    });
}

module.exports = {
    byNameOrId: byNameOrId,
    All: All,
};