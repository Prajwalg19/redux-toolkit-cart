import { useSelector } from "react-redux";
import { BsBagDashFill } from "react-icons/bs";
function NavBar() {
    let { amount, total } = useSelector((store) => {
        return store.first;
    });

    return (
        <>
            <div className="flex  items-center sticky w-full bg-blue-500  px-3 py-3">
                <main className="max-w-2xl w-full mx-auto flex items-center justify-between">
                    <div className="text-lg font-semibold text-white">Redux Practise</div>
                    <div className="relative flex items-center  justify-center">
                        <BsBagDashFill className="text-3xl text-white" />
                        <span className="absolute px-2 py-1 text-xs font-semibold text-white bg-blue-400 rounded-full box-border left-4 bottom-3 ">{amount}</span>
                    </div>
                </main>
            </div>
        </>
    );
}

export default NavBar;
