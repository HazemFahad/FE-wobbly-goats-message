import axios from 'axios';
const API_URL = require("../config");

const myApi = axios.create({
  baseURL: API_URL,
});

export const fetchRooms = () => {
  return myApi.get(`/rooms`).then((res) => {
    return res.data.rooms;
  });
};

export const fetchUsers = () => {
  return myApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};
