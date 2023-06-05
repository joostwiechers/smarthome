import {configureStore} from '@reduxjs/toolkit'
import smarthomeReducer from './slices/smarthomeSlice'
import hueReducer from './slices/hueSlice'
import homewizardReducer from './slices/homewizardSlice'
import {homewizardApi} from './apis/homewizardApi'
import {hueApi} from './apis/hueApi'

/**
 * The app's store.
 */
export const store = configureStore({
    reducer: {
        smartHome: smarthomeReducer,
        hue: hueReducer,
        homewizard: homewizardReducer,

        [homewizardApi.reducerPath]: homewizardApi.reducer,
        [hueApi.reducerPath]: hueApi.reducer,
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
            .concat(homewizardApi.middleware)
            .concat(hueApi.middleware)
    }
})
