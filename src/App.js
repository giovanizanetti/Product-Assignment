import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'

function App() {
  return (
    <div data-testid='app-component' className="App">
      <Router>
      {Routes}
      </Router>
    </div>
  );
}

export default App;
