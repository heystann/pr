import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home.jsx'
import { Marketplace } from './pages/marketplace.jsx'
import { AccountPage } from './pages/account.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { Layout } from './components/layout.jsx'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={< HomePage />} index />
        <Route path='/marketplace' element={< Marketplace />} />
        <Route path='/account' element={< AccountPage />} />
        <Route path='*' element={< NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
