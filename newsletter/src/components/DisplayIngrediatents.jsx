export default function DisplayIngrediatents(){

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    function handleAddIngClick(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newing = formData.get("ingredient");
        const newinglist = ingredients.push(newing);
        console.log(ingredients)

    }
 



    return(<>

            <form onSubmit={handleAddIngClick} className="add-ingredient-form"> 
                <input type="text" placeholder="e.g. Oregano" aria-label="gradient" name="ingredient"/>
                <input type="text" placeholder="e.g additional info" arial-label="additionalinfo" name="additionalinfo" />
                <button> Add Ingredient</button>

            </form>
            <ul>
               
               { 
               ingredients.map(
                    (ing) => { return (<li key={ing}>{ing}</li>) }
               )
            
            }
            </ul>
    </>)
}