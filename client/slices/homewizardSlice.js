import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
}

const homewizardSlice = createSlice({
    name: 'homewizard',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload.data
        },
    }
})

export const { setData } = homewizardSlice.actions
export default homewizardSlice.reducer
