import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const url='https://fsd-e-comm.herokuapp.com/mobiles';
function App() {
  const [mobiles,setmobiles]=useState([]);
  useEffect(()=>{
    fetch(`${url}`)
    .then(data=>data.json())
    .then(res=>setmobiles(res));
  },[]);
  
  return (
    <div className="App">
      <div className="phone-list-container">
    {
      mobiles.map((item)=>{
        return <Phone mobile={item}/>
      })
    }
      </div>
     
    </div>
  );
}
function Phone({mobile}){ 
  return <div className='phone-container'>
   
    <img src={mobile.img} alt={mobile.name} className='phone-picture'/>
   <h2 className='phone-name'>{mobile.model}</h2>
   <p className='phone-company'>{mobile.company}</p>
  </div>

}

export default App;
