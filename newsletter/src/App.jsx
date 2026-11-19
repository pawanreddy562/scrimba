import './App.css'
import Entry from './components/Entry'
import Header from './components/Header'
import MapPractice from './components/MapPractice'
import Props1 from './components/Props1'
import Props2 from './components/Props2'
import UserCard from './components/UserCard'
import ConditionalRendering from './components/ConditionalRednering'
import FilterMap from './components/FilterMap'
import EventsPractice from './components/EventsPractice'
import DisplayIngrediatents from './components/DisplayIngrediatents'
import StateBehavior from './components/StateBehavior'
import StatePractice1 from './components/StatePractice1'
function App() {

    const array = ["adsf","asdfadf"];
     const users = [
  { id: 1, name: "John", age: 22 },
  { id: 2, name: "Sarah", age: 19 },
  { id: 3, name: "Mike", age: 25 },
];

  return (
    
     <div>
      <EventsPractice />
      <DisplayIngrediatents />
      <StateBehavior/>
      <StatePractice1 />
      
<ConditionalRendering />
<FilterMap />

       { 
             
         users.map((eachuser) => {
                return  <UserCard eachuser={eachuser} key={eachuser.id} />
                   })
         }
    </div>
   
     
  
  
  )



}

export default App
