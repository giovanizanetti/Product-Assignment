import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Header from '../src/components/Header'

function App() {
  return (
    <div data-testid='app-component' className='App'>
      <Router>
        <Header />
        {Routes}
      </Router>
    </div>
  )
}

export default App
