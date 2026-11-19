import React  from "react"
export default function Main(){
    
    const defaultIngredients = ["Chicken","Oregano","Tomatoes"];
    const [ingredients,setIngredients] = React.useState(defaultIngredients);

    const ingredientListItems = ingredients.map(
         (ingredient)=>(<li key={ingredient}>{ingredient}</li>)
        )

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newingredient = formData.get("newIngredient");

        setIngredients(
            prevIgredients=>[...prevIgredients,newingredient]
        )

    }
    
    return (<>

                <form onSubmit={handleSubmit} className="add-ingredient-form">
                    <input type="text" name="newIngredient" placeholder="e.g Oregano" area-label="Add Ingredient" />
                    <button>Add Ingredient</button>
                </form>
                <ul>
                    {ingredientListItems}
                </ul>
    </>)
}