import { useState, useEffect } from 'react'
import './App.css'
import CreateProduct from './pages/CreateProduct'
import UserTable from './pages/UserTable'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'


function App() {
  const [count, setCount] = useState(0)
//   let [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         // console.log(data);
//         setUsers(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
//   return (
//     <>
//     <table>
//         <thead>
//             <th>Name</th>
//             <th>Userame</th>
//             <th>Email</th>
//             <th>Phone</th>
//         </thead>
//         <tbody>
//         {
//             users.map((users)=>{
//                 return(
//                         <tr>
//                             <td>{users.name}</td>
//                             <td>{users.username}</td>
//                             <td>{users.email}</td>
//                             <td>{users.phone}</td>
//                         </tr>
//                 );
//             })}
        
//         </tbody>
//       </table>
//     {/* <div>
//       <CreateProduct/>


return(
  <>
       
     {/* <div>
       <UserTable/>
       </div> */}
      <BrowserRouter>
        <Routes>
            <Route path= 'form' element={<CreateProduct/>}/>
            <Route path= 'about' element={<About/>}/>
            <Route path= 'products' element={<Products/>}/>
        </Routes>
  </BrowserRouter>
  </>
)
}
export default App