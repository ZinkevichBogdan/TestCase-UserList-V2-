import { createSlice } from "@reduxjs/toolkit";

interface FormState {
   active: boolean
}
const initialState: FormState = {
   active: false
}

const setClassNameSlice = createSlice({
   name: 'setClassName',
   initialState,
   reducers: {
      addFlag(state) {
         state.active = true
      },

      removeFlag(state) {
         state.active = false
      }
   }
})

export const { addFlag, removeFlag } = setClassNameSlice.actions
export default setClassNameSlice.reducer