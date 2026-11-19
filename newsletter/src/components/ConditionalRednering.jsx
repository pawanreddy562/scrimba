 export default function ConditionalRendering(){

    const userlist = [
  { id: 1, name: "John", online: true },
  { id: 2, name: "Sarah", online: false },
  { id: 3, name: "Mike", online: true },
    ];


    return (
        <div>
             {
                userlist.map((user)=>{return <div key={user.id}>
                    {user.name}{user.online && <div> online</div> }{!user.online && <div> offline</div> }                
                </div>})
             }
        </div>
    )
}