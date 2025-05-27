import axios from 'axios';

export const fetchUsers = () => axios.get("/users").then(res => res.data);

export const fetchUserById = (id: string) =>
  axios.get(`/users/${id}`).then(res => res.data);

export const createUser = (userData: any) =>
  axios.post("/users", userData).then(res => res.data);

export const updateUser = (id: string, updates: any) =>
  axios.put(`/users/${id}`, updates).then(res => res.data);

export const deleteUser = (id: string) =>
  axios.delete(`/users/${id}`).then(res => res.data);
