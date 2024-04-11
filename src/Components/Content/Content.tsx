import Card from "../Card/Card.tsx";

export default function Content() {
    return (
        <div className="flex flex-col mt-10 items-center gap-14 w-full h-full">
            <h1 className="text-maincolor font-bold text-5xl tracking-xl9 text-center ">THE GAME LIST</h1>
            <a href="#" className=" text-2xl underline cursor-pointer mr-5 text-alt">Click here for github!!</a>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-20">
                <Card />
            </div>
        </div>
    );
}