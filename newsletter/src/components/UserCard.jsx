export default function UserCard(props){
 const eachuser= props.eachuser;
return(
   
   <div className="user-container" key = {props.eachuser.id}>
        <p> {eachuser.name}<br></br> Age: {eachuser.age}</p>
        
   </div>
)

}