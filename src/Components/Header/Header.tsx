
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
    return (
        <div className="flex w-full items-center md:w-medium">
            <div className="flex flex-row m-3 justify-between w-full">
            <h1 className="text-2xl tracking-xl9 text-maincolor font-semibold items-center">RAWG</h1>
            <input type="search" className="w-100 rounded p-2 bg-altbg text-maincolor md:w-200" placeholder="Search Any Game You Want"/>
            <CiMenuBurger className='text-maincolor text-4xl mt-0.5 cursor-pointer' />
            </div>
        </div>
    );
}