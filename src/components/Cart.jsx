import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { ADD_RESERVATION, REMOVE_RESERVATION } from "../reducers/cartReducer";

const Cart = ({ cart, addItem, removeItem }) => {

    let [cartLocal, setCartLocal] = useState(cart);

    //useState([{
    //     arrivaldate: "2022-05-13T22:00:00.000Z",
    //     avalaiblekilos: 20,
    //     cityFrom: "Madrid",
    //     cityTo: "Abidjan",
    //     departureDate: "2022-05-11T22:00:00.000Z",
    //     description: "un Bon petit weekend .",
    //     images: ['http://localhost:3000/uploads/1650932605295buildings-7109918_640.jpg'],
    //     kiloPrice: 5.99,
    //     quantity: "11",
    //     tripsStatus: "RESERVATION",
    //     _id: "62673b7db9ca6422d32a8e62"
    // }])// useState(cart);

    const handleChange = (e, id) => {
        // e.preventDefault();
        console.log('handleChange', cart);
        let newCart = cartLocal.map((element, index) => {
            if (index === id)
                return { ...element, [e.target.name]: e.target.value }
            return element
        });
        console.log(newCart)
        setCartLocal([...newCart]);
    }
    return (
        <div>
            <div className="container mt-5 p-8 rounded cart">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="product-details me-2">
                            <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span></div>
                            <hr />
                            <h6 className="mb-0">Shopping cart</h6>
                            {cartLocal.map((element) => (
                                <div key={element._id} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                    <div className="d-flex flex-row">
                                        <div className="me-4">
                                            <h6 className='city'><b>
                                                {element.cityFrom}&nbsp;
                                                <span className="material-icons">
                                                    flight_takeoff flight_land
                                                </span>
                                                &nbsp;{element.cityTo}
                                            </b></h6>
                                        </div>
                                        <span className="material-icons large align-items-center">luggage</span>
                                        <span className="align-middle kilo ">
                                            <label htmlFor=""> {element.description}</label>

                                            <input type="number"
                                                pattern="[0-9]*"
                                                name="quantity"
                                                className="form-control"
                                                id="quantity"
                                                value={cartLocal[0].quantity}
                                                onChange={(e) => handleChange(e, 0)} required />
                                            {cartLocal[0].avalaiblekilos && cartLocal[0].avalaiblekilos + ' Kg (max)'}
                                        </span>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <span className="d-block ms-5 fw-bold">€ {(cartLocal[0].quantity * cartLocal[0].kiloPrice).toFixed(2)} </span>
                                        <i className="fa fa-trash-o ms-3 text-black-50"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect((state) =>
({
    cart: state.cart

}),
    (dispatch) => ({

        addItem: (item) => dispatch({ type: ADD_RESERVATION, payload: item }),
        removeItem: (item) => dispatch({ type: REMOVE_RESERVATION, payload: item })
    })
)(Cart); 