export const STORE_USER = "STORE_USER"
export const DISCONNECT_USER = "DISCONNECT_USER"
let initialAuth = { isConnected: false, user: undefined };



let getLocalAuth = () => {
  let auth = JSON.parse(localStorage.getItem('AUTH'));

  console.log('auth', auth?.user?.expirationDateth);
  if (auth?.user?.expirationDate > Date.now()) {
    return auth;
  } else {
    localStorage.setItem('AUTH', JSON.stringify(initialAuth))
    return initialAuth;
  }

}
let currentAuth = getLocalAuth();
let authReducer = (state = currentAuth, action) => {
  switch (action.type) {
    case STORE_USER:
      console.log('store element ', action.payload)
      var newUser = { ...state, user: action.payload, isConnected: true };
      localStorage.setItem('AUTH', JSON.stringify(newUser));
      return newUser
    case DISCONNECT_USER:
      localStorage.removeItem('AUTH')
      return { ...state, ...initialAuth }
    default:
      return state
  }
}

export default authReducer; 