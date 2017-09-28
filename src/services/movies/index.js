const api_key = 'e51c38413ab9317db1cd3e69902d68f1';
const base_url = 'https://api.themoviedb.org/3';

/**
 * Method for getting configuration from MovieDB.
 *
 * @method getConfiguration
 * @return {Promise}
 */
export function getConfiguration() {
    return fetch(`${base_url}/configuration?api_key=${api_key}`)
        .then((response) => {
            let contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        });
}

/**
 * Method for finding movies by text string in MovieDB.
 *
 * @method inputChangeText
 * @param {String} text String from search text input
 * @param {Integer} page Int with page number to get
 * @return {Promise}
 */
export function findMovies(text, page) {
    return fetch(`${base_url}/search/movie?api_key=${api_key}&query=${text}&page=${page}`)
        .then((response) => {
            let contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        });
}

/**
 * Method for getting detail about movie from MovieDB by ID.
 *
 * @method inputChangeText
 * @param {Int} id Movie ID
 * @return {Promise}
 */
export function getMovieById(id) {
    return fetch(`${base_url}/movie/${id}?api_key=${api_key}`)
        .then((response) => {
            let contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        });
}
