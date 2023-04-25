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

enum VoteType {
  SPLIT_TICKET = 'SPLIT_TICKET',
  ESTIMATION = 'ESTIMATION',
}

interface Vote {
  voteId: string,
  userId: string,
  ticketId: string,
  type: VoteType
  value: string
}

enum CeremonyStatus {
  LOADING = 'LOADING',
  REVIEW = 'REVIEW',
  COMPLETED = 'COMPLETED'
}

interface ActiveCeremonySliceState {
  id: string,
  name: string,
  description: string,
  status: CeremonyStatus,
  tickets: Array<Ticket>,
  votes: Array<Vote>,
  pointSystem: PointSystem,
  participants: Array<User>,
}

const initialState: ActiveCeremonySliceState = {
  id: '',
  name: '',
  description: '',
  tickets: [],
  status: CeremonyStatus.LOADING,
  pointSystem: PointSystem.Agile,
  votes: [],
  participants: [],
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
    setName: (state, action: PayloadAction<ActiveCeremonySliceState['name']>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<ActiveCeremonySliceState['description']>) => {
      state.description = action.payload;
    },
    setPointSystem: (state, action: PayloadAction<ActiveCeremonySliceState['pointSystem']>) => {
      state.pointSystem = action.payload
    },
    addParticipant: (state, action: PayloadAction<ActiveCeremonySliceState['participants']>) => {
      state.participants = [...state.participants, ...action.payload]
    },
    addTicket: (state, action: PayloadAction<ActiveCeremonySliceState['tickets']>) => {
      state.tickets = [...state.tickets, ...action.payload]
    },
  },
})

export const { setName, setDescription, setPointSystem, addParticipant, addTicket } = newCeremonySlice.actions;

const selectItem = (property: keyof ActiveCeremonySliceState) => (state: AppState) => state.newCeremony.ceremonyDetails[property];
export const selectActive = (state: AppState) => state.newCeremony.active;
export const selectName = selectItem('name')
export const selectDescription = selectItem('description')
export const selectPointSystem = selectItem('pointSystem')
export const selectParticipants = selectItem('participants')
export const selectTickets = selectItem('tickets')
