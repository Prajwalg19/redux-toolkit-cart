import { MdOutlineCancel } from "react-icons/md";
import { modalActions } from "../features/modalSlice";
import { useDispatch } from "react-redux";
import { actions } from "../features/firstSlice";
function Modal() {
    const dispatch = useDispatch();
    return (
        <div className="">
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-25 "></div>
            <div className="flex justify-center fixed items-center top-0 right-0 left-0 bottom-0  px-4">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow ">
                        <button type="button" className="" data-modal-hide="popup-modal">
                            <MdOutlineCancel onClick={() => dispatch(modalActions.closeModal())} className="absolute right-3 top-3 text-xl text-gray-400 " />
                        </button>
                        <div className="p-6 text-center">
                            <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <h3 className="mb-5 text-lg font-normal text-gray-500 font-semibold ">Are you sure you want to clear the cart ?</h3>
                            <button
                                data-modal-hide="popup-modal"
                                type="button"
                                className="hover:text-white text-red-700 bg-white border-red-600 border-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm inline-flex items-center font-semibold px-5 py-2.5 text-center mr-2 uppercase tracking-widest transition ease-in-out"
                                onClick={() => {
                                    dispatch(actions.clearCart());
                                    dispatch(modalActions.closeModal());
                                }}
                            >
                                Confirm
                            </button>
                            <button
                                data-modal-hide="popup-modal"
                                type="button"
                                className="transition ease-in-out hover:text-white hover:bg-gray-700 text-gray-700 bg-white  focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border-gray-200 text-sm font-semibold px-5 uppercase tracking-widest py-2.5 hover:text-gray-900 focus:z-10 border-2 border-gray-700 "
                                onClick={() => dispatch(modalActions.closeModal())}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
