
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cat,setCat] = useState("") 
  const [comp,setComp] = useState("") 
  const [top,setTop] = useState("") 
  const [min,setMin] = useState("") 
  const [max,setMax] = useState("") 

  const [data,setData] =  useState([])

  const catHandler = e => {
    e.preventDefault();
    setCat(e.target.value);
  }

  const compHandler = e => {
    e.preventDefault();
    setComp(e.target.value);
  }

  const topHandler = e => {
    e.preventDefault();
    setTop(e.target.value);
  }
  const minHandler = e => {
    e.preventDefault();
    setMin(e.target.value);
  }
  const maxHandler = e => {
    e.preventDefault();
    setMax(e.target.value);
  }

  const onsubmitHandler = e =>{
    e.preventDefault()
    let product_data = {
      comp : comp,
      cat:cat,
      top:top,
      min:min,
      max:max

    }
    fetch('http://localhost:5346/getItems',{
      method:"post",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(product_data)
    }).then(response => console.log(response.json())).then(data => setData(data))
  }

  return (
    <div>
      <center>
      <h1>Welcome to E-commerce</h1></center>
      <div className='container'>
        <div className='container'>
        <h2>Select The Categories</h2><br/>
        <form onSubmit={onsubmitHandler}>
          <input type='text' value={comp} onChange={compHandler} placeholder='company'/>&nbsp;<br/>
          <input type='text' value={cat} onChange={catHandler} placeholder='Category'/>&nbsp;<br/>
          <input type='text' value={top} onChange={topHandler} placeholder='n products'/>&nbsp;<br/>
          <input type='text' value={min} onChange={minHandler}  placeholder='Min Price'/>&nbsp;<br/>
          <input type='text' value={max} onChange={maxHandler} placeholder='Max Price'/>&nbsp;<br/>
          <input type='submit' className='btn btn-success' />
        </form>
        </div>
        <div className='card'>
        {data.map(item => <div key={item.productName}>
        <p>Name : {item.productName} age : {item.price} </p>
      </div>)}
        </div>
      </div>
    </div>
  )
}

export default App
