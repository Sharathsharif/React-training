import { useState} from 'react';


function Form()
{

    
let [name, setName]=useState();
let [age, setAge]= useState();

    return(
                <div>
                            <h1>Candidate details</h1>
        
                            <input type='text' placeholder='Enter your name' onChange={(event)=>{setName(event.target.value)}}/>
                            <input type='number' placeholder='Enter your Age' onChange={(event)=>{setAge(event.target.value)}}/>
                            <button onClick={()=>{console.log(name, age)}}>  submit </button>

                </div>

    )
}


export default Form;


