import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  items: [],
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return fetch("http://localhost:3001/products")
    .then((response) => response.json())
    .then((data) => data.products);
});

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    deleteProduct: (state, action) => {
      console.log(action);
      Swal.fire({
        title: "¿Deseas eliminar el producto?",
        text: "Eliminar un producto es una acción permanente y no podrás recuperar el producto eliminado.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5B00A2",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
      }).then((result) => {
        let URL = `http://localhost:3001/products/${action.payload}`;
        if (result.isConfirmed) {
          fetch(URL, { method: "DELETE" })
            .then((response) => {
              if (response.status !== 200) {
                throw new Error(`Error! status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              Swal.fire(
                "Éxito!",
                "El producto ha sido eliminado correctamente.",
                "success"
              );
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al eliminar producto!",
              });
            });
          let filtered = state.filter((item) => item.upc !== action.payload);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
