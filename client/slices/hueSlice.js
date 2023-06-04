import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lights: [],
}

const hueSlice = createSlice({
    name: 'hue',
    initialState,
    reducers: {
        setLights(state, action) {
            state.lights = action.payload.lights
        },
    }
})

export const { setLights } = hueSlice.actions
export default hueSlice.reducer
