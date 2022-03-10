/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    loading: false,
    error: false,
    isDone: false,
    notes: [],
    activeNote: '',
  },
  reducers: {
    createNoteLoading(state) {
      state.loading = true;
    },
    createNoteSuccess(state, action) {
      state.loading = false;
      state.notes = [...state.notes, action.payload];
      state.isDone = true;
    },
    createNoteError(state) {
      state.loading = false;
      state.error = true;
    },
    updateNoteLoading(state) {
      state.loading = true;
    },
    updateNoteSuccess(state, action) {
      state.loading = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });
    },
    updateNoteError(state) {
      state.loading = false;
      state.error = true;
    },
    updateActiveNote(state, action) {
      if (action.payload === '') {
        state.activeNote = '';
      } else {
        state.activeNote = state.notes.filter((note) => action.payload === note.id);
      }
    },
  },

});

export const {
  // eslint-disable-next-line max-len
  createNoteLoading, createNoteSuccess, createNoteError, updateNoteLoading, updateNoteSuccess, updateNoteError, updateActiveNote,
} = noteSlice.actions;

export default noteSlice.reducer;
