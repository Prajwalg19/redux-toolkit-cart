import "./index.css";
import NavBar from "./components/navbar";
import Body from "./components/body";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./features/firstSlice";
import Modal from "./components/modal";
function App() {
    let dispatch = useDispatch();
    let theSlice = useSelector((store) => {
        return store.first;
    });
    useEffect(() => {
        dispatch(actions.cartAmount());
    }, [theSlice, dispatch]); //putting theSlice (i.e firstSlice , the object containing the whole state of the slice) as a dependency
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
