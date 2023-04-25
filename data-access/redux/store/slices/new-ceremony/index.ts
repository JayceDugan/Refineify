import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from "@/data-access/redux/store";
import { HYDRATE } from "next-redux-wrapper";

enum PointSystem {
  Agile = 'agile'
}

interface User {
  id: '',
}

interface Ticket {
  id: '',
}

interface NewCeremonySliceState {
  active: boolean,
  ceremonyDetails: {
    name: string,
    description: string,
    tickets: Array<Ticket>,
    pointSystem: PointSystem,
    participants: Array<User>,
  }
}

const initialState: NewCeremonySliceState = {
  active: false,
  ceremonyDetails: {
    name: '',
    description: '',
    tickets: [],
    pointSystem: PointSystem.Agile,
    participants: [],
  }
}

export const newCeremonySlice = createSlice({
  name: 'newCeremony',
  initialState,
  reducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.newCeremony
      };
    },
    setActive: (state, action) => {
      console.log(state.active);
      state.active = action.payload
    },
    setName: (state, action: PayloadAction<NewCeremonySliceState['ceremonyDetails']['name']>) => {
      state.ceremonyDetails.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<NewCeremonySliceState['ceremonyDetails']['description']>) => {
      state.ceremonyDetails.description = action.payload;
    },
    setPointSystem: (state, action: PayloadAction<NewCeremonySliceState['ceremonyDetails']['pointSystem']>) => {
      state.ceremonyDetails.pointSystem = action.payload
    },
    addParticipant: (state, action: PayloadAction<NewCeremonySliceState['ceremonyDetails']['participants']>) => {
      state.ceremonyDetails.participants = [...state.ceremonyDetails.participants, ...action.payload]
    },
    addTicket: (state, action: PayloadAction<NewCeremonySliceState['ceremonyDetails']['tickets']>) => {
      state.ceremonyDetails.tickets = [...state.ceremonyDetails.tickets, ...action.payload]
    },
  },
})

export const { setName, setActive, setDescription, setPointSystem, addParticipant, addTicket } = newCeremonySlice.actions;

const selectItem = (property: keyof NewCeremonySliceState['ceremonyDetails']) => (state: AppState) => state.newCeremony.ceremonyDetails[property];
export const selectActive = (state: AppState) => state.newCeremony.active;
export const selectName = selectItem('name')
export const selectDescription = selectItem('description')
export const selectPointSystem = selectItem('pointSystem')
export const selectParticipants = selectItem('participants')
export const selectTickets = selectItem('tickets')
