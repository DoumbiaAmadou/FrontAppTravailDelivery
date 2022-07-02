let initialAuth = [];
let getLocalAuth = () => {
  let cart = JSON.parse(sessionStorage.getItem('CART'));

  console.log('CART', cart);
  if (cart) {
    return cart;
  } else {
    sessionStorage.setItem('CART', JSON.stringify(initialAuth))
    return initialAuth;
  }
}
  ;



export const ADD_RESERVATION = 'ADD_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';


function cartReducer(state = getLocalAuth(), action) {
  let newCart;
  switch (action.type) {

    case ADD_RESERVATION:
      newCart = [...state, action.payload]
      sessionStorage.setItem('CART', JSON.stringify(newCart));
      return newCart; // payload eg: {tipId: 00000, kilosReserved:4 , kiloReservedPrice: 10, priceTotal : 80 , date_Res: 11/11/2022, } 
    case REMOVE_RESERVATION:
      newCart = state.filter((element) => element !== action.payload);
      sessionStorage.setItem('CART', JSON.stringify(newCart));
      return newCart;
    default:
      return state
  }
}

export default cartReducer;