import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: '그림', // 기본 카테고리를 "그림"으로 설정
  reducers: {
    setCategory: (state, action) => action.payload,
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
