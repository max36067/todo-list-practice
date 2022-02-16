import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add: {
      reducer: (state, action) => [
        action.payload,
        ...state,
      ],

      prepare: (text) => {
        const id = nanoid();
        const isComplete = false;
        return { payload: { id, text, isComplete } };
      },
    },
    remove: (state, action) => state.filter((todo) => todo.id !== action.payload),
    setComplete: (state, action) => state.map((todo) => ({
      ...todo,
      isComplete: action?.payload === todo.id ? true : todo.isComplete,
    })),
  },
});

export const todoState = (state) => state.todos;
export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
