import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    idPersonaje: 0,
    detallePersonaje: [],
    episodiosPersonaje: []
}

export const dataSlice = createSlice({
    name: 'dataFetch',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setId: (state, action) => {
            state.idPersonaje = action.payload
        },
        getInfoPersonaje: (state) => {
            state.detallePersonaje = state.data.find((item) => item.id === state.idPersonaje);
        },
        getEpisodiosPersonaje: (state) => {
            state.episodiosPersonaje = state.data.find((item) => item.id === state.idPersonaje).episode
        }
    },
})

export const { setData, setId, getInfoPersonaje, getEpisodiosPersonaje } = dataSlice.actions

export default dataSlice.reducer