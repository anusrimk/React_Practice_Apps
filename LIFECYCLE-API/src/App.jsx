import { useEffect, useState } from 'react'
import './App.css'

function App() {

  //useeffect will be by default called for every render and rerender
  //passing a blank array will only call it on render
  // let [name, setName] = useState("Anusri ")
  // let [age,setAge] = useState(18)

  // useEffect(() =>{
  //   console.log("Component Rendered")
  // }, [])
  // useEffect(() =>{
  //   console.log("Second Useeffect")
  // }, [age])//idhar bhi blank array dala toh rerender pe call hoga
//if i want age variable to be the changing factor to rerender then bracket me age dalungi
  //if name render ho raha mat ho but age rerender hua toh call ho


  // return (
  //   <>
  //     <h1>
  //       Welcome {name} {age}
  //     </h1>
  //     <button onClick={() => {setName("Karmokar")}}>Change the name</button>

  //     <button onClick={() => {setAge("19")}}>Change Age</button>

  //     <br></br>   
   
  //   </>
  // )
  let [users, setUsers] = useState([])
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users", {
      method:"GET"
    })
  
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    setUsers(data)
  })
  .catch((err)=>{
    console.log(err)
  })

},[])

return(
  <>{


  users.map((users)=>{
    return(
      <h1>{users.name}</h1>
    )
    })
  }
  </>
)
}

export default App