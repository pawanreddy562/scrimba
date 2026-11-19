import React from "react";
export default function StateBehavior(){

    let [counter,setCounter] = React.useState(0);

    console.log("coutner rendered"+ counter);
   
    function handleClick() { (setCounter(prevcounter => prevcounter+1))}

     function handleClicksubtract(){setCounter(prevcounter => prevcounter-1)     }

    return ( 
         
         
         
          <main className="state-container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="state-counter">
              
                <button className="minus" onClick={handleClicksubtract} aria-label="Decrease count">–</button>
                 <h2 className="displaycount">{counter}</h2>
                <button className="plus" onClick={handleClick} aria-label="Increase count">+</button>
            </div>
        </main>)
}