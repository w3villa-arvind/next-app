'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic';
const HeavyComponent  =  dynamic ( ()=> import('./components/HeavyComponent'),
{loading: () => <p>Loading...</p>})


export default  function Home() {
  const [isVisible, setVisible] = useState(false)
  return (
    <main>
      <h1>Hello world </h1> 
      <button onClick={()=> setVisible(true)}>show</button>
     {isVisible && <HeavyComponent />}
    </main>
  )
}
