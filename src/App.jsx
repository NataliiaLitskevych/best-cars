import { useState } from 'react'
import { data } from './data'
import './App.css'

function App() {
  
  const [cars, setCars] = useState(0);

  const {id, model, description, image, base} = data[cars];

  const nextCar = () => {
    setCars((cars => {
      cars ++;
      if(cars > data.length -1) {
        cars = 0;
      }
      return cars;
    }))
  }

  const previousCar = () => {
    setCars((cars => {
      cars --;
      if(cars < 0) {
        return data.length -1;
      }
      return cars;
    }))
  }

  return (
    <>
      <div className='container'>
        <h1>10 Best Cars for 2025</h1>
      </div>

      <div className='container'>
        <img src={image} alt='car' width='700px' />
      </div>

      <div className='container'>
        <h2>{id} - {model}</h2>
      </div>

      <div className='container'>
        <p>{description}</p>
      </div>

      <div className='container'>
        <h2>Base price: {base}</h2>
      </div>

      <div className='btn container'>
        <button onClick={previousCar}>Previous</button>
        <button onClick={nextCar}>Next</button>
      </div>
        
    </>
  )
}

export default App
