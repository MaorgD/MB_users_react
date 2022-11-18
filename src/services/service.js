import axios from 'axios'
// export const API_URL = 'https://userapiben.cyclic.app'
// export const API_URL = 'http://localhost:27017'
export const API_URL = 'https://user-api-ptu9.onrender.com'
export const TOKEN_NAME = "my-token";
export const TOKEN_ROLE = "my-role";
export const TOKEN_ID = "my-ID";
export const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*.<>])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const doApiGet = async(_url) => {
    try {
        let resp = await axios.get(_url, {
            headers: {
                'Content-Type': 'application/json',
                // "x-api-key":localStorage[TOKEN_NAME]
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}

export const doApiMethodSignUpLogin = async(_url, _method, _body = {}) => {
    try {
        let resp = await axios({
            method: _method,
            url: _url,
            data: JSON.stringify(_body),
            headers: {
                'Content-Type': 'application/json',
                // "x-api-key":localStorage[TOKEN_NAME]
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}
export const doApiMethodToken = async(_url, _method, _body = {}) => {
    try {
        let resp = await axios({
            method: _method,
            url: _url,
            data: JSON.stringify(_body),
            headers: {
                // 'Content-Type': 'application/json',
                "x-api-key":localStorage[TOKEN_NAME]
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}

export const doApiMethodTokenPatch = async(_url, _method, _body = {}) => {
    try {
        let resp = await axios({
            method: _method,
            url: _url,
            data: _body,
            headers: {
                // 'Content-Type': 'application/json',
                "x-api-key":localStorage[TOKEN_NAME]
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}