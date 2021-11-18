import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import DebtorShow from './pages/DebtorShow'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/debtors/:id" exact component={DebtorShow} />
    </BrowserRouter>
  )
}

export default App
