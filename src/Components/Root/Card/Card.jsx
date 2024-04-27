import { useEffect, useState } from "react";

const Card = () => {
 
    const [Cards,setCards]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/Place')
    .then(res => res.json())
    .then(data => setCards(data))
},[]);
console.log(Cards);
    
    return (
        <div>
            {Cards.length}
        </div>
    );
};

export default Card;