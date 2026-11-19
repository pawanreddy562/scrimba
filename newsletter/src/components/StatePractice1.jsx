import React from "react"

export default function StatePractice1(){
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"];
    const [fruits,setFruits] = React.useState(["Apple", "Banana"]);

    function handleAddFruit(){
        setFruits(pfruites=>{ return [...pfruites,allFavoriteThings[pfruites.length-2]]})
    }
    function handleRemoveFruit(){

    }
    return <main>
            {
                fruits.map(
                    (fruit,i)=><div key={i}>{fruit}</div>
                    
                )
                
            }
            <button aria-label="add Orange" onClick={handleAddFruit}>Addfruit</button>
            <button aria-label="add Orange" onClick={handleRemoveFruit}>remove fruit</button>
    </main>
}