import {configureStore} from '@reduxjs/toolkit'

import smarthomeReducer from './slices/smarthomeSlice'
import hueReducer from './slices/hueSlice'
import homeWizardReducer from './slices/homeWizardSlice'

import {homeWizardApi} from './apis/homeWizardApi'
import {hueApi} from './apis/hueApi'

/**
 * The app's store.
 */
export const store = configureStore({
    reducer: {
        smartHome: smarthomeReducer,
        hue: hueReducer,
        homeWizard: homeWizardReducer,

        [homeWizardApi.reducerPath]: homeWizardApi.reducer,
        [hueApi.reducerPath]: hueApi.reducer,
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
            .concat(homeWizardApi.middleware)
            .concat(hueApi.middleware)
    }
})
