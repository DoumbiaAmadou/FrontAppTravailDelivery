import NavBar from "./Navbar";
import { BrowserRouter, Route } from 'react-router-dom'
import HomeStore from "./Home";
import '../css/App.css';
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import Cart from "./Cart"; 
import Profile from "./Profile";
import { Provider } from "react-redux";
import store from '../store'
import { useEffect } from "react";
import { LOAD_TRIPS } from '../reducers/tripsReducer'
function App() {


  useEffect(() => {
    console.log('APP =>', store.getState())
      fetch('http://localhost:3000/trip')
        .then(res => res.json())
        .then(json => {
          console.log(' init', json.trips.length)
          store.dispatch({
            type: LOAD_TRIPS,
            payload: json.trips
          })

        }).catch(err => {
          console.log('catch',err)
          store.dispatch({
            type: LOAD_TRIPS,
            payload: []
          })
        })}

  , [])

  return (
    <Provider store={store}  >

      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Route exact path='/' component={HomeStore} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
        </div>
      </BrowserRouter>

    </Provider>

  );
}

export default App;
