import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '../reducers'
import middleware from '../middleware'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export default () => {
  const store = createStore(persistedReducer, middleware)
  const persistor = persistStore(store)
  return { store, persistor }
}