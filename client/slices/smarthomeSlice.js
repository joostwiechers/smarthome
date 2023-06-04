import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeApp: 'hue'
}

const smarthomeSlice = createSlice({
    name: 'smarthome',
    initialState,
    reducers: {
        setActiveApp(state, action) {
            state.activeApp = action.payload.app
        },
    },
})

export const { setActiveApp } = smarthomeSlice.actions
export default smarthomeSlice.reducer
