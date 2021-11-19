import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import Routes from './Routes'
import Header from '../src/components/Header'
import { StoreProvider } from './globalState/Store'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <div data-testid='app-component' className='App'>
      <Router>
        <StoreProvider>
          <Header showModal={showModal} setShowModal={setShowModal} cartCount={cartCount} setCartCount={setCartCount} />
          {Routes}
        </StoreProvider>
      </Router>
    </div>
  )
}

export default App
