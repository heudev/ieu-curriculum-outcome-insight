import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET Request:(NgRx Effect)
// action name: forms/fetchForms()
// Angular reference: export const loadUsers = createAction("[Users] Load Users");
export const fetchForms = createAsyncThunk("forms/fetchForms", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:3030/api/forms");
    console.log(response);
    return response.data;
  } catch (error) {
    return rejectWithValue("err!");
  }
});


export const addForm = createAsyncThunk("forms/addForm", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post("https://localhost:3030/api/add-form", formData);
    return response.data;
  } catch (error) {
    return rejectWithValue("err!");
  }
});
