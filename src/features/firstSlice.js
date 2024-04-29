import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    amount: 4,
    isLoading: true,
    cartItems: [],
    total: 0,
};

// Create an async thunk to fetch cart items
export const getCartItems = createAsyncThunk("name/items", async () => {
    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://course-api.com/react-useReducer-cart-project");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching cart items:", error);
        throw error;
    }
});

// Create a slice
const demoSlice = createSlice({
    name: "letitgo",
    initialState,
    reducers: {
        //the action type are defined with this property
        clearCart: (state) => {
            //the clearCart is called Action type and the arrow function is called action reducer
            //clearcart is a function that acts as a action type which will be used by useDispatch to send a action object to the reducer function to trigger the change in the state. the state.cartItems is the action performed correspoding to it.
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
        decCounter: (state, {payload}) => {
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
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default demoSlice.reducer;
export const {actions} = demoSlice; //the actions property of the slice is exported , the action object within it (is in form of function) is used by the useDispatch function for sending the action
