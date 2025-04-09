//import{useEffect} from 'react';
import React from "react"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

//import { useState } from "react";
//import Navbar from "./components/navbar";

//function Welcome() {
 // useEffect(()=> {console.log("le composant a eté monté !")}, []);
  //return <h1>Bienvenue dans l'appli</h1>
//}
//export default Welcome;



// import { useState, useEffect} from 'react';
//function App() {
  // const [clicks, setClicks] = useState(0);
  // useEffect(()=> {
  //   console.log('le nombre de clics est maintenat :${clicks}');
    
  // }, [clicks]);

  //return (
    // <button onClick={() => setClicks(clicks + 1)}>clics :{clicks}</button>
   // <div>
      //<Navbar/>
     // <h1>Bonsoir</h1>
    //</div>
 // );
// }
//export default App;


//import {useState} from 'react';

//export default function FormSimple() {
  //const [nom, setNom] = useState("");
  //const handleChange = (e) =>{
   // setNom(e.target.value);
  //};

  //const handleSubmit = (e) => {
    //e.prevenDefault();
  //  alert('bonjour ${nom} !')
    
  //};

  //return(
    //<form onSubmit={handleSubmit}>
      //<label>Nom:</label>
     // <input type="text" value={nom} onChange={handleChange} className="form-control"/>
     // <button type="submit" className="btn btn-primary mt-2" >Envoyez</button>

   // </form>
 // )
//}



// const Formulaire = () => {
//   const [formData, setFormData] = useState({
//     nom:"",
//     email:"",
//     message:"",
//     ville:"",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState =>({
//       ...prevState,
//       [name]: value
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("donné de formulaire", formData);
//     alert("formulaire envoyé")
//   };

//   return(
//     <div className="contenair mt-5 justify-content-center">
//       <br/>
//       <br/>
//       <form class="rorm" onSubmit={handleSubmit}>
//   <div class="col-6">
//     <label class="form-label">Nom</label>
//     <input type="text" class="form-control" id="inputEmail4" value={formData.nom} onChange={handleChange}/>
//   </div>
//   <div class="col-6">
//     <label  class="form-label">Email</label>
//     <input type="email" class="form-control" id="inputPassword4" value={formData.email} onChange={handleChange}/>
//   </div>
//   <div class="col-6">
//     <label for="inputAddress" class="form-label">message</label>
//     <input type="text" class="form-control" id="inputAddress" value={formData.message} onChange={handleChange}/>
//   </div>
//   <div class="col-6">
//     <label for="inputCity" class="form-label">City</label>
//     <input type="text" class="form-control" id="inputCity" value={formData.ville} onChange={handleChange}/>
//   </div>
  
  
 
//   <div class="col-6">
//     <button type="submit" class="btn btn-primary">Sign in</button>
//   </div>
// </form>
//     </div>
//   );
// }
// export default Formulaire;


const abdou = () => {
return(
//   <div>
//    <div class="contenair">
//   < div class="row">
//     <div class="col-6 bg-primary text-white">colonne de 6</div>
//     <div class="col-6 bg-success text-white">colonne de 6</div>
//     <div class="col-6 bg-primary text-white">colonne de 6</div>
//     <div class="col-6 bg-danger text-white">colonne de 6</div>
//     <div class="col-6 bg-primary text-white">colonne de 6</div>
//     <div class="col-6 bg-danger text-white">colonne de 6</div>
//   </div>
// </div>

// <div class="contenair-fluid">
//   <div class="row">
//     <div class="col-6 bg-primary text-white">colonne de 6</div>
//     <div class="col-6 bg-success text-white">colonne de 6</div>
//     <div class="col-6 bg-primary text-white">colonne de 6</div>
//     <div class="col-6 bg-danger text-white">colonne de 6</div>
//     <div class="col-6 bg-primary text-white">colonne de 6</div>
//     <div class="col-6 bg-danger text-white">colonne de 6</div>
//   </div>

  
// </div>

// </div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>

)
}
export default abdou;