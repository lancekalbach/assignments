import sandpoint from "./sandpoint.jpg"
import cancun from "./cancun.jpg"
import whistler from "./whistler.jpg"
import netherlands from "./netherlands.jpg"
import parkcity from "./parkcity.jpg"

export default [
    {
      place: "Sandpoint, Idaho",
      price: 40,
      timeToGo: "Spring",
      image: <img src={sandpoint} className="card--images"/>
    },{
        place: "Cancun",
        price: 900,
        timeToGo: "Winter",
        image: <img src={cancun} className="card--images"/>
    },{
        place: "Whistler, Canada",    
        price: 1200,
        timeToGo: "Fall",
        image: <img src={whistler} className="card--images"/>
    },{
        place: "Netherlands",
        price: 1100,
        timeToGo: "Summer",
        image: <img src={netherlands} className="card--images"/>
    },{
        place: "Park City, Utah",
        price: 400,
        timeToGo: "Spring",
        image: <img src={parkcity} className="card--images"/>
    }
  ]