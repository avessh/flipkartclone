import axios from 'axios';

const URL = 'http://localhost:8000'

export const signupauthentication = async (data) => {
    try {

        return await axios.post(`${URL}/signup`, data)

    } catch (error) {
        console.log('error while fetching signup api', error.message);
    }
}

export const loginauthentication = async (data) => {
    try {

        return await axios.post(`${URL}/login`, data)

    } catch (error) {
        console.log('error while fetching login api', error.message);
    }
}


export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}
