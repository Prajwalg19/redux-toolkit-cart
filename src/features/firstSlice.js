import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
let initialState = {
    amount: 4,
    isLoading: true,
    cartItems: cartItems,
    total: 0,
};

const demoSlice = createSlice({
    //firstSlice is the object that contains many properties that are useful
    name: "letitgo",
    initialState,
    reducers: {
        //the action type are defined with this property
        clearCart: (state) => {
            //the clearCart is called Action creator and the arrow function is called action reducer
            //clearcart is a function that acts as a action creator which will be used by useDispatch to send a action object to the reducer function to trigger the change in the state. the state.cartItems is the action performed correspoding to it.
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            // action cotains 2 things : type : ( the name of the slice "letitgo" and the action creator function name "removeItem"  ) and payload:  ( the payload that is sent within the parameter of the dispatcher)
            state.cartItems = state.cartItems.filter((obj) => {
                return obj.id != action.payload; //if the predicate (i.e the call back function returns true then filter will add the element of the array to the array )
            });
        },
        incCounter: (state, action) => {
            state.cartItems.map((obj) => {
                if (obj.id == action.payload) {
                    ++obj.amount;
                    return obj;
                } else {
                    return obj;
                }
            });
        },
        decCounter: (state, { payload }) => {
            //destructuring payload from the object
            let cartItem = state.cartItems.find((obj) => {
                return obj.id == payload;
            });
            cartItem.amount = cartItem.amount - 1; //changing the value of the property of the object changes the original object as the reference to the object is stored inside of the variable in javascript
            //In JavaScript, when you retrieve a primitive value (such as a string or number) from an array or object, you get a copy of that primitive value, not a reference to it. However, when you retrieve an object (including arrays) from an array or object, you get a reference to that object.
        },

        cartAmount: (state) => {
            let a = 0;
            let b = 0;
            state.cartItems.forEach((item) => {
                a += item.amount;
                b += parseFloat(item.price) * item.amount;
            });
            state.amount = a;
            state.total = b.toFixed(2);
        },
    },
});
export default demoSlice.reducer;
export const { actions } = demoSlice; //the action property of the slice is exported , the action object within it (is in form of function) is used by the useDispatch function for sending the action
