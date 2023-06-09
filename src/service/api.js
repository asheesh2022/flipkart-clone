import axios from 'axios';

const URL = 'https://expe-flip-clone.onrender.com';

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        // return error.response;
        alert("please signup first")
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);

    }
}

// export const getProductById = async (id) => {
//     try {
//         return await axios.get(`${URL}/product/${id}`);
//     } catch (error) {
//         console.log('Error while getting product by id response', error);
//     }
// }

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}