import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../services/userService'
import { DISCONNECT_USER, STORE_USER } from '../reducers/authReducer';
import { useHistory } from "react-router-dom";


const LoginUI = ({ userConnected, isConnected, onStoreUser }) => {
  let [user, setUser] = useState({ email: '5555@gmail.com', password: 'password', message: '' });
  let history = useHistory();

  useEffect(() => {

  }, [])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value, message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(' user ', user);
    let connectedUser = await loginUser(user)
    //TODO handle login 
    //{status: 'OK', email: '5555@gmail.com', message: 'Auth succesful', 
    //token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…xOTh9.3Q1c0hqMs9GJMk4MwD4Fj0uKw7lXpt_vpt0pGCF3OR4'}
    console.log('connectedUser', connectedUser)
    if (connectedUser.status === 'OK') {
      delete connectedUser.message;
      onStoreUser(connectedUser);
      history.push('/')
    } else {
      console.log('connectedUser', connectedUser)
      setUser({ email: '', password: '', message: connectedUser.message })

    }

  }

  return (
    <div className='container'>
      <section className="vh-100" >
        <div className="container h-50">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ 'borderRadius': '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Se connecter!</p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        {user.message &&
                          <div className="alert alert-danger">
                            <strong>Erreur!</strong>  {user.message}
                          </div>
                        }
                        <span> {user.message} </span>
                        <div className=" form-floating mb-3 ">
                          <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input type="email" name="email" className="form-control" id="fliEmail"
                              value={user.email} onChange={handleChange} placeholder="Email:" required />
                            {/* <label htmlFor="fliEmail">Email :</label> */}
                          </div>
                        </div>

                        <div className="form-floating mb-5 mb-3">
                          <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input type="password" name="password" className="form-control" value={user.password} onChange={handleChange} id="floatingPassword" placeholder="Mot de passe:" />
                            {/* <label htmlFor="floatingPassword">Mot de passe</label> */}
                          </div>
                        </div>

                        <div className="form-floating d-flex flex-row justify-content-center">
                          <button className="btn waves-effect waves-light" type="submit" >Se connecter
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </div >
  )
}
function mapStateToProps(state) {

  let { user, isConnected } = state;
  return {
    userConnected: user,
    isConnected: isConnected,
  }

};
function mapDispatchToProps(dispatch) {
  return {
    onStoreUser: (user) => {
      dispatch({
        type: STORE_USER,
        payload: user
      });
    }
    , onDisconnect: () => {
      dispatch({
        type: DISCONNECT_USER,
      });
    }
  }
}

const Login = connect(
  mapStateToProps, mapDispatchToProps
)(LoginUI);

export default Login; 
