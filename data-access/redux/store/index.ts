import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {createWrapper, MakeStore} from 'next-redux-wrapper';
import { newCeremonySlice } from "@/data-access/redux/store/slices";

const makeStore: MakeStore<any> = () =>
  configureStore({
    reducer: {
      [newCeremonySlice.name]: newCeremonySlice.reducer
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
