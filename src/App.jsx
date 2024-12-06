import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import SearchBar from './components/searchBar'
import PurchaseBlock from './components/purchaseBlock'
import { processList } from './constants/exampleData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main className='max-w-[1200px] w-full p-4'>
        <SearchBar />
        <div>
          {
            processList.map((process)=> <PurchaseBlock process={process}/>)
          }
        </div>

      </main>
    </>
  )
}

export default App
