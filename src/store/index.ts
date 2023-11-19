import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinhor: carrinhoReducer
  }
})

export type RootReduce = ReturnType<typeof store.getState>
