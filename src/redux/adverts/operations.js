import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://64da33c0e947d30a260af237.mockapi.io';

export const getAdverts = createAsyncThunk('/adverts', async (_, thunkAPI) => {
  const limit = 10;
  const page = 1;

  try {
    const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const operations = {
  getAdverts,
};

export default operations;
