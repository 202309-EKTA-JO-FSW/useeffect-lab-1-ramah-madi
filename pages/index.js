import { useEffect, useState } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
   const [data, setData] = useState(null)
   const [numberOfDogs, setnumberOfDogs] = useState("")
   const dogs = numberOfDogs ? numberOfDogs : "3"

   useEffect(()=> {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogs}`)
    .then((resp) => resp.json())
    .then((data) =>  setData(data))
   }, [numberOfDogs])
   
   

   if(!data) {
    return <p>Loading...</p>
   }

   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <Form setNumberOfDogs={setnumberOfDogs}/>
      <DogList dogsList={data}/>
    </div>
  );
}

