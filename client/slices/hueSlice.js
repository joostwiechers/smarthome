import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lights: [],
    activeGroup: null
}

const hueSlice = createSlice({
    name: 'hue',
    initialState,
    reducers: {
        setLights(state, action) {
            state.lights = action.payload.lights
        },
        setGroups(state, action) {
            state.groups = action.payload.groups
        },

        setActiveGroup(state, action) {
            state.activeGroup = action.payload.id
        }
    }
})

export const { setLights, setGroups, setActiveGroup } = hueSlice.actions
export default hueSlice.reducer
