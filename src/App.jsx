import { useState } from 'react'
import './App.css'
import { AuraProvider } from './Components/Context/AuraContext'
import Search from './Components/Search/Search'
import MainBody from './Components/Body/MainBody'
import Header from './Components/Header/Header'

function App() {

  return (
    <AuraProvider>
      <Header/>
      <MainBody />
      <Search />
    </AuraProvider>
  )
}

export default App
