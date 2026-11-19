export default function Props2(props){
    
    console.log(props)
    const {name,sampleArray} = props;
    const a  = [1,2,3,,5];
    const b = a.map(
        (x) => x*2
    );

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];


const lastArray = kvArray.map(
    ({key,value})=> ({[key]: value})
);


const intArray = ["1","2","3","4"];

const inAtrr = intArray.map(
    (x) => parseInt(x,10)
);


const products = [{product1:"abc"}, {product1:"xyz"}];

const producctsafterprice = products.map(

    (prod)=>
        {
           prod.price= "10";
           
        }
)

    console.log(b);
    console.log(lastArray);
    console.log(inAtrr);
    console.log(products);
    return (
        <>
        <h1> This is header in props2 {sampleArray[0].commentid}</h1>
        </>
    )
}