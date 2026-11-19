export default function MapPractice(){

    const fruits = ["Apple", "Banana", "Mango", "Orange"];
    const students = ["John", "Sarah", "Mike", "Emma"];
    const users = [
  { id: 1, name: "John", age: 22 },
  { id: 2, name: "Sarah", age: 19 },
  { id: 3, name: "Mike", age: 25 },
];
    
    return (
        
        <div>
           {
            fruits.map((fruit)=>(<p>{fruit} </p>))
           }       
           {
            students.map((student,i)=>(<p><i> {++i}. {student}</i></p>))
           }   
           {
            users.map(
                (user)=>(<div key={user.id}>
                        <p> {user.name} - {user.age}</p>
                    </div>)
                )
            }                
        </div>
        )
}