import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { actions } from "../features/firstSlice";
function CartItem(itemsValues) {
    const { item } = itemsValues;
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-5">
                        <img src={item.img} className="w-[120px]" />
                        <div className="flex flex-col ">
                            <span className="text-base font-medium capitalize">{item.title}</span>
                            <span className="text-sm font-semibold text-blue-500">
                                ${""}
                                {item.price}
                            </span>
                            <span className="text-sm text-indigo-400 cursor-pointer opacity-90" onClick={() => dispatch(actions.removeItem(item.id))}>
                                remove
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <BsChevronUp className="text-blue-600 cursor-pointer" onClick={() => dispatch(actions.incCounter(item.id))} />
                        <div>{item.amount}</div>
                        <BsChevronDown
                            className="text-blue-600 cursor-pointer "
                            onClick={() => {
                                if (item.amount === 1) {
                                    dispatch(actions.removeItem(item.id));
                                    return;
                                }

                                dispatch(actions.decCounter(item.id));
                            }}
                        />
                    </div>
                </div>
                {}
            </div>
        </>
    );
}

export default CartItem;
