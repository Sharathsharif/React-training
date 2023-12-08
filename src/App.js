
import './App.css';
import Header from './header';
import Productlist from './productlist';
// import { useState} from 'react';
import Form from './formmodel';



function App() {


  let countries= [
    {name:"India", capital:"Newdelhi"},
    {name:"South Africa", capital:"Newdelhi"}, 
    {name:"USA", capital:"Newdelhi"},
  ]

  return (
    <div>
             
             {
              countries.map((country,index)=>{
                return(
                  <div className='box' key={index}>
                    <h3>{country.name}</h3>
                    <p>{country.capital}</p>


                  </div>

                )

              })





             }








      {/* <div className="box">
       <h2>{countries[0].name}</h2>
       <p>{countries[0]. capital}</p>
      </div>
      
      <div className="box">
       <h2>{countries[1].name}</h2>
       <p>{countries[1]. capital}</p>
      </div>

      <div className="box">
       <h2>{countries[2].name}</h2>
       <p>{countries[2]. capital}</p>
      </div> */}

    </div>
    
  )
}

export default App;
