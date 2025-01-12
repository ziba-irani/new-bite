import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsModel } from "../models";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: [] as IProductsModel[],
  reducers: {
    addProduct: (state, action: PayloadAction<IProductsModel>) => {
      const productExists = state.some(
        (product) => product.id === action.payload.id
      );
      if (!productExists) {
        return [...state, action.payload];
      }
      return state; 
    },
 
    increaseCount: (state, action: PayloadAction<IProductsModel>) => {
      const updatedProducts = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      return updatedProducts;
    },
    decreaseCount: (state, action: PayloadAction<IProductsModel>) => {
      const updatedProducts = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count > 1 ? item.count - 1 : item.count,
          };
        }
        return item;
      });
      return updatedProducts;
    },
    removeProduct: (state, action: PayloadAction<IProductsModel>) => {
      const updatedProducts = state.filter(
        (item) => item.id !== action.payload.id
      );
      return updatedProducts;
    },
  },
});

export const { addProduct, increaseCount, decreaseCount, removeProduct } =
  productSlice.actions;
export default productSlice.reducer;
