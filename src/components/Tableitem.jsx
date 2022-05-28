import React from 'react'
import Table from './Table'
const Tableitem = ({data}) => {
  console.log('data:', data)
  return (
    <>
    
    {data.map((ele)=> (
        <Table  ele = {ele}></Table>
    ))}
    </>
  )
}

export default Tableitem