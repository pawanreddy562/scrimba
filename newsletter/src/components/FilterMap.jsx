export default function FilterMap(){
const selectedCategory = "electronics";
const onlyInStock = true;
const maxPrice = 1500;
    const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Mouse",
    price: 30,
    category: "electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 80,
    category: "electronics",
    inStock: false,
  },
  {
    id: 4,
    name: "Monitor",
    price: 400,
    category: "electronics",
    inStock: true,
  },
  {
    id: 5,
    name: "Desk",
    price: 250,
    category: "furniture",
    inStock: true,
  },
  {
    id: 6,
    name: "Chair",
    price: 150,
    category: "furniture",
    inStock: false,
  },
];



function isValidProdcut(product,selectedCategory,onlyInStock,maxPrice){
   
    const categoryMatches = selectedCategory===""|| selectedCategory === product.category;
    

    const stockMatches = onlyInStock===false || onlyInStock === product.inStock;
 
    

    const priceMatches = maxPrice==="" || maxPrice >= product.price ;

    
    return(
           categoryMatches && stockMatches && priceMatches
        )
    

}     

const filterproducts= products.filter((product)=> isValidProdcut(product,selectedCategory,onlyInStock,maxPrice));
console.log(products)
console.log(filterproducts)
;
        return(
                <div>
                        {  filterproducts.map((product)=>{
                            return (
                                <div key={product.id}>
                                    <p>{product.name} - {product.price} - {product.category} - {product.inStock} - {product.id}
                                    </p>
                                    
                                    
                                </div>
                            )
                        })
                            
                        }

                </div>
        )
}