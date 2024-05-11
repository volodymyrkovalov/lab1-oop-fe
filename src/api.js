import axios from "axios";

// Base URL of your backend server
const API_BASE_URL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await axiosInstance.get("/books");
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Failed to fetch books:", error);
    throw error;
  }
};

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

// Add a new book
export const addBook = async (bookData) => {
  try {
    const response = await axiosInstance.post("/books", bookData);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Failed to add book:", error);
    throw error;
  }
};

// Update a book
export const updateBook = async (bookId, bookData) => {
  try {
    const response = await axiosInstance.put(`/books/${bookId}`, bookData);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Failed to update book:", error);
    throw error;
  }
};

// Delete a book
export const deleteBook = async (bookId) => {
  try {
    await axiosInstance.delete(`/books/${bookId}`);
  } catch (error) {
    // Handle errors
    console.error("Failed to delete book:", error);
    throw error;
  }
};
