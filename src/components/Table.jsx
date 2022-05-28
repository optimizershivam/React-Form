import React from 'react'

const Table = ({ele}) => {
  return (
    
        
            
            <tr>
           <td>{ele.username}</td>
           <td>{ele.age}</td>
           <td>{ele.email}</td>
           <td>{ele.address}</td>
           <td>{ele.department}</td>
           <td>{ele.salary}</td>
           <td>{!ele.married ? "unmarried" : "married"}</td>
           <td>{ele.photo}</td>
           
         </tr>
          
  )
}

export default Table