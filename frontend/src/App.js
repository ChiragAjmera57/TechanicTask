import { useEffect, useState } from 'react';
import { fechDummyData } from './utils/fetchDummydata';
import { Row } from './components/Row';
const height = {
  height :"50px"
}
function App() {
  const [data,setData] = useState(null)
  const [error,setError] = useState(false)

  useEffect(()=>{
    fechDummyData().then((resp)=>{
      setData(resp.data)
    }).catch((error)=>{
      setError(true)
    })
  },[])
  if(error){
    return (
      <div>
        <h1>Something Went Wrong .....</h1>
      </div>
    )
  }
  return (
    <div className="App mt-5 p-4">
      <table className='table table-striped table-hover w-100 m-auto'>
     <thead className='bg-info  ' style={height} >
          <th className='text-center' >Product Name</th>
          <th className='text-center'>Product Image</th>
          <th className='text-center' >Order Id</th>
          <th className='text-center' >City</th>
          <th className='text-center' >Country</th>
          <th className='text-center' >Store Name</th>
          <th className='text-center' >User Id</th>
          <th className='text-center' >Unit Price</th>
          <th className='text-center' >Quantity</th>
          <th className='text-center' >Total Price</th>
          <th className='text-center' >Mode</th>
          <th className='text-center' >Shipping Date</th>
          <th className='text-center'>Order Detail</th>
          <th className='text-center'>Track</th>
      </thead>
      <tbody className='mt-5'>
      {
        data?.map(ele=>{
          return (<Row  key={ele._id} props={ele} />)
        })
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;
