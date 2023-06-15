import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
}

const homeWizardSlice = createSlice({
    name: 'homeWizard',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload.data
        },
    }
})

export const { setData } = homeWizardSlice.actions
export default homeWizardSlice.reducer
