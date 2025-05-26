import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home.jsx'
import { Marketplace } from './pages/Marketplace.jsx'
import { AccountPage } from './pages/Account.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { Layout } from './components/layout.jsx'
import { URLS } from './components/const.jsx'

function App() {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<Layout/>}>
        <Route path={URLS.HOME} element={<HomePage/>} index />
        <Route path={URLS.MARKETPLACE} element={<Marketplace/>} />
        <Route path={URLS.ACCOUNT} element={<AccountPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
    </Routes>
  )
}

export default App
