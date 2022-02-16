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
        const isCompleted = false;
        const isEditing = false;
        return {
          payload: {
            id, text, isCompleted, isEditing,
          },
        };
      },
    },
    remove: (state, action) => state.filter((todo) => todo.id !== action.payload),
    setCompleted: (state, action) => state.map((todo) => ({
      ...todo,
      isComplete: action?.payload === todo.id ? true : todo.isComplete,
    })),
    setEdit: (state, action) => state.map((todo) => ({
      ...todo,
      isEditing: action?.payload.id === todo.id ? action?.payload.isEditing : todo.isEditing,
    })),
    edit: (state, action) => state.map(
      (todo) => ({
        ...todo,
        isEditing: action?.payload.id === todo.id ? false : todo.isEditing,
        text: action?.payload.id === todo.id ? action?.payload.text : todo.text,
      }),
    ),
  },
});

export const todoState = (state) => state.todos;
export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
