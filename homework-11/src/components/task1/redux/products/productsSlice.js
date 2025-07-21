import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    "Кавоварка", "Телевізор", "Планшет", "Навушники", "Монітор", "Ноутбук", "Мікрохвильовка",
    "Смартфон", "Пилосос", "Клавіатура", "Миша", "Принтер", "Чайник", "Тостер",
    "Роутер", "Пауербанк", "Фен", "Блендер", "Камера", "Колонки"
  ],
  filter: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addProduct, removeProduct, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
