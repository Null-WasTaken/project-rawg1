import axios from "axios";
import {useEffect , useState} from "react";
export default function Card() {

    const [items , setItems] = useState([])

    useEffect(() => {
       axios.get("https://api.rawg.io/api/games?key=500e476c61ec4718be2436199e8aa545")
           .then(res => {
              setItems(res.data.results)
           }).catch(err => {
               console.log(err)
       })
    }, []);

    return (
      <>

          {items.map(item => {
              return (
                  <div className="w-35e rounded-2xl mt-3 h-25e bg-secondary">
                      <img src={item['background_image']} className="w-full rounded-2xl h-100" alt=""/>
                      <h1 className="text-3xl text-maincolor p-4">{item['name']}</h1>
                      <span className="p-5 text-maincolor text-sm font-light">{item['rating']}</span>
                      <a className="block p-5 ml-44 text-maincolor bg-alt w-44 text-center rounded ease-in-out" href="#">Learn More!</a>
                  </div>
              )
          })}

      </>



    )
}