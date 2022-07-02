import { combineReducers, createStore } from 'redux'
import tripsReducer from '../reducers/tripsReducer'
import authReducer from '../reducers/authReducer'
import cartReducer from '../reducers/cartReducer'

export default createStore(
  combineReducers({
       auth : authReducer, 
       allTrips: tripsReducer,
       cart : cartReducer, 

  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)