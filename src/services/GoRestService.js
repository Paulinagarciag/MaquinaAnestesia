import axios from 'axios';
const API = 'https://gorest.co.in/public/v2/'
const headers = {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer e1d51c98f23beff8aa9f047696c5f2481364065deaba89611c165f4d4bc7b7ac'
}

export const getUsers = async () => {
    return await axios.get(`${API}users`, { headers })
}

export const getUser = async (id) => {
    return await axios.get(`${API}users/${id}`, { headers })
}
export const deleteUser = async (id) => {
    return await axios.delete(`${API}users/${id}`, { headers });
};

export const updateUser = async (id,user) => {
    return await axios.put(`${API}users/${id}`, user, { headers })
}