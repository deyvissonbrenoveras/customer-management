import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Customer } from '../../types/Customer'

type CustomerState = {
  list: Customer[]
}

const initialState: CustomerState = {
  list: [],
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.list.push(action.payload)
    },
    removeCustomer: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(c => c.cnpj !== action.payload)
    },
  },
})

export const { addCustomer, removeCustomer } = customerSlice.actions
export default customerSlice.reducer
