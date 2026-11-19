export default function EventsPractice(){

    function AlertButton(props){

        return (
            <button onClick={()=>{alert(props.message); console.log(props)}}> {props.children}</button>
        )
    }
    
    
    function handleClick(){
        return (
            <>
                clicked
                {console.log('clicked')}
            </>
        )
    }

   function handleButtonDisplay(name){
     console.log(name);
      console.log(name.target);
   }

   function handleEvent3(event){
    console.log(event.target);
    console.log(event);
   }


    return (
        <div>
                <AlertButton message='button1 clicked'> button1</AlertButton>
                <AlertButton message='button 2 clicked'> button2</AlertButton>
                <button onClick={(e)=>{handleButtonDisplay("abcd");console.log(e.target)}}> button 3 </button>
                <button onClick= {handleClick} > button </button>
                <button onClick={handleEvent3}> button4 </button>
                

        </div>
    )
}
