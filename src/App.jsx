import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import SearchBar from './components/searchBar'
import PurchaseBlock from './components/purchaseBlock'
import { processList } from './constants/exampleData'

function App() {
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
};

export default App;
