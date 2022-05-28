import React, { useEffect, useState } from 'react'
import Tableitem from './Tableitem'

const Form = () => {

    const[form,setform] = useState({
        // username:"",
        // email: "",
        // password: "",
        // age:"",
        // isIndian: false,
        // gender:""
        // city: ""
    })
    
    const [data, setData] = useState([])
    const onChange = (e) => 
    {
      let {name,value,type,checked,files} = e.target
     
      if(type==="checkbox")
      {
        setform({
            ...form, [name]:checked,
        }) 
      }
      else if (type=== "file")
      {
        setform({
            ...form, [name]:files,
        })  
      }
      else 
      {
        setform({
            ...form, [name] : value
        })
      }



    }

    // useEffect(()=> {
    //     console.log('form:', form)

    // },[form])
   const handleonsubmit = (e) => 
   {
    e.preventDefault()
    console.log(form)
  setData([...data,form])

   }



  return (
    <div>Form
        <form onSubmit={handleonsubmit}>
        <div>
           <label>Name:</label> 
           <input type="text" name='username' placeholder='Enter Name...'
           value={form.username} onChange={onChange}/>
        </div>

        <div>
           <label>Email:</label> 
           <input type="email" name='email' placeholder='Enter E-mail...' value={form.email}
           onChange={onChange}/>
        </div>

        <div>
           <label>Address:</label> 
           <input type="text"name='address' placeholder='Enter Address...'value={form.address}
           onChange={onChange}/>
        </div>


        <div>
           <label>Age:</label> 
           <input type="number" name='age' onChange={onChange}  value = {form.age}
           />
        </div>
         
        <div>
           <label>Salary:</label> 
           <input type="text"name='salary' value={form.salary}
           onChange={onChange}/>
        </div>


        <div >
        <label>Department</label>
        <select name="department"  onChange={onChange} value ={form.department}>
             <option value=""></option>
            <option value="hr">HR</option>
            <option value="it">IT</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
        </select>
    </div>



        <div>
          
           <input type="checkbox" name='marital' onChange={onChange}  checked= {form.marital}
           
           />
            <label>: marital state</label> 
        </div>

        {/* <div>
        
           <input type="radio" name='gender' onChange={onChange}  value= {"Male"}
           
           />
           <label>Male</label> 
        
           <input type="radio" name='gender' onChange={onChange}  value= {"Female"}
           
           />
           <label>Female</label> 
        </div> */}

        {/* <div>
           <label>User Resume:</label> 
           <input type="file"name='resume' files={form.resume}
           onChange={onChange}/>
        </div> */}


        <div>
           <label>Profile Photo:</label> 
           <input type="file"name='photo' files={form.photo}
           onChange={onChange}/>
        </div>


       <button type='submit'>Submit</button>
        </form>
       
       <div >
          <table className='class' >
          <thead>
            <tr>
           <th>Name</th>
           <th>Age</th>
           <th>Email</th>
           <th>Address</th>
           <th>Department</th>
           <th>Salary</th>
           <th>Marrital status</th>
           <th>Photo</th>
           
         </tr>
            </thead>
            <tbody>
            <Tableitem data={data}></Tableitem>
            </tbody >
          </table>
       </div>


      
    </div>
  )
}

export default Form