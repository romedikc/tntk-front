import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../constants";
import axios from "axios";

const initialState = {
  books: [
    {
      id: 1,
      title: "Harry Potter and the Goblet of Fire",
      author: "J. K. Rowling",
      price: "12.04",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: "9.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "7.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg",
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: "8.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: "10.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
    },
    {
      id: 9,
      title: "Jane Eyre",
      author: "Charlotte Bronte",
      price: "11.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
    },
    {
      id: 10,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      price: "8.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/71OFqSRFDgL.jpg",
    },
    {
      id: 12,
      title: "War and Peace",
      author: "Leo Tolstoy",
      price: "14.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
    },
    {
      id: 13,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      price: "11.49",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
    },
    {
      id: 17,
      title: "The Iliad",
      author: "Homer",
      price: "11.49",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
    },
    {
      id: 23,
      title: "Madame Bovary",
      author: "Gustave Flaubert",
      price: "10.49",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
    },
    {
      id: 24,
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      price: "12.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
    },
    {
      id: 27,
      title: "Beloved",
      author: "Toni Morrison",
      price: "10.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg",
    },
    {
      id: 31,
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      price: "11.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg",
    },
    {
      id: 34,
      title: "A Tale of Two Cities",
      author: "Charles Dickens",
      price: "8.49",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
    },
    {
      id: 35,
      title: "Les Miserables",
      author: "Victor Hugo",
      price: "14.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
    },
    {
      id: 39,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "10.49",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL.jpg",
    },
    {
      id: 40,
      title: "The Shining",
      author: "Stephen King",
      price: "11.99",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
    },
    {
      id: 42,
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      price: "10.49",
      imglink:
        "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
    },
  ],
  book: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
});

export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async (bookId) => {
    const response = await axios.get(`${API_URL}/books/${bookId}`);
    return response.data;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBookById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.book = action.payload;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
