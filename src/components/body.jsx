import CartItem from "./cartItem";
import { useDispatch } from "react-redux";
import Modal from "./modal";
import { modalActions } from "../features/modalSlice";
import { useSelector } from "react-redux";
function MainBody() {
    const dispatch = useDispatch();
    const isItOpen = useSelector((store) => {
        return store.modal.isOpen;
    });
    const { cartItems, total } = useSelector((store) => {
        //useSelector has access to the whole store defined in the store.js
        return store.first;
    });
    let value = 0;
    cartItems.map((item) => {
        value += item.amount;
    });

    return (
        <>
            <div className="max-w-2xl px-3 mx-auto">
                <h1 className="mt-6 text-3xl font-bold text-center uppercase mb-9">Your Bag</h1>
                {value != 0 ? cartItems.map((item) => <CartItem key={item.id} item={item} />) : <div className="text-base font-medium text-center ">is currently empty</div>}
                {cartItems.length != 0 && (
                    <div>
                        <hr />
                        <div className="flex justify-between mt-3 ml-3 text-sm font-semibold">
                            <p>Total</p>
                            <p>$ {total}</p>
                        </div>
                        <div className="flex justify-center mt-3 mb-3">
                            <button className="px-5 py-1 mx-auto tracking-widest text-red-800 uppercase border-2 border-red-800 rounded-sm transition ease-in-out hover:bg-red-700 hover:text-white active:bg-red-900 " onClick={() => dispatch(modalActions.openModal())}>
                                {/*dispatching the action object*/}
                                clear cart
                            </button>
                        </div>
                    </div>
                )}
                {isItOpen && <Modal />}
            </div>
        </>
    );
}

export default MainBody;
