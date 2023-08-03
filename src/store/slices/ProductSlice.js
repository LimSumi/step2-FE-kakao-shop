import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/product";
import _ from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null, // error exist: { message, status }
  isEnd: false,
};



const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, // 빈 객체를 넣어주어서 기존에는 reducer가 없지만 오류를 피할 수 있습니다.
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        if (action.payload.response.length < 10) {
          state.isEnd = true;
        }

        state.loading = false;
        state.products = _.uniqBy(
          [...state.products, ...action.payload.response],
          "id"
        );
        state.error = action.error;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page) => {
      const response = await fetchProducts(page);
      return response.data; // action.payload
    }
  );

export default productsSlice.reducer;
