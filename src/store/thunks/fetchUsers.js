import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 'users/fetch' the first argument where we put a ' ' describing what are we fetching or the purpose of the request. 
const fetchUsers = createAsyncThunk ('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  return response.data;
});


export { fetchUsers };




