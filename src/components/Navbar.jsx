import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DISCONNECT_USER } from '../reducers/authReducer';

const NavBar = ({auth, disconnect}) => {
  // let history = useHistory();

  return (
     
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          
          <Link className='navbar-brand text-dark' to={'/'}> Export Solutions </Link>

          <ul className="nav nav-extended">
            { (!auth||  !auth.isConnected ) && 
              <React.Fragment>
              <li className="nav-item"><Link className='nav-link' to={'/signUp'}> Sign in </Link> </li>
              <li className="nav-item"><Link className='nav-link' to={'/login'}> login </Link> </li>
              </React.Fragment>

            }
            { (auth?.isConnected && auth.user?.email ) && 
               <li className="nav-item"> <span className='nav-link'>
                 Bienvenue {auth.user.email}!
                 </span></li>
            }
            <li className="nav-item"><Link className='nav-link' to={'/'}> les trajets </Link> </li>
            <li className="nav-item"><Link className='nav-link' to={'/profile'}> Profil </Link></li>
            <li className="nav-item"><Link className='nav-link' to={'/about'}> About </Link></li>
            <li className="nav-item"><Link className='nav-link' to={'/contact'}> Contact </Link></li>
            { (auth && auth.isConnected ) && 
               <li className=" nav-item"><button className='btn btn-outline-success my-2 my-sm-4 ' onClick={disconnect} > se Deconnecter! </button> </li>
            }
          </ul>
        </div>
      </nav>
  )
}


export default connect((state)=>({
  auth : state.auth 
}),
(dispatch)=>({
  disconnect : ()  => { dispatch( {type : DISCONNECT_USER })}  
})
)(NavBar);