import "./index.css";
import NavBar from "./components/navbar";
import Body from "./components/body";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, getCartItems } from "./features/firstSlice";
function App() {
    let dispatch = useDispatch();
    let theSlice = useSelector((store) => {
        return store.first;
    });
    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    useEffect(() => {
        dispatch(actions.cartAmount());
    }, [theSlice, dispatch]); //putting theSlice (i.e firstSlice , the object containing the whole state of the slice) as a dependency

    if (theSlice.isLoading) {
        return <>Loading...</>;
    }

    return (
        <>
            <div>
                <NavBar />
                <Body />
            </div>
        </>
    );
}

export default App;
