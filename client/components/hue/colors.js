/**
 * All available colors to click in the app.
 * @type {[{settings: {sat: number, hue: number}, hex: string, title: string},{settings: {sat: number, hue: number}, hex: string, title: string},{settings: {sat: number, hue: number}, hex: string, title: string},{settings: {sat: number, hue: number}, hex: string, title: string},{settings: {sat: number, hue: number}, hex: string, title: string}]}
 */
const colors = [
    {
        title: 'White',
        settings: {
            hue: 0,
            sat: 0
        },
        hex: '#FFFFFF'
    },
    {
        title: 'Red',
        settings: {
            hue: 0,
            sat: 254
        },
        hex: '#c0392b'
    },
    {
        title: 'Green',
        settings: {
            hue: 30000,
            sat: 254
        },
        hex: '#27ae60'
    },
    {
        title: 'Pink',
        settings: {
            hue: 56424,
            sat: 254
        },
        hex: '#e84393'
    },
    {
        title: 'Purple',
        settings: {
            hue: 49545,
            sat: 254
        },
        hex: '#8e44ad'
    }
]
export default colors
