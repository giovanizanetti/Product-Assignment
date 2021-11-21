import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import ProductDetails from './views/ProductDetails'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>
}

const Routes = (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/cart' exact component={Cart} />
    <Route path='/:product' exact component={ProductDetails} />
    <Route path='/cart/checkout' exact>
      {Checkout}
    </Route>
    <Route component={NoMatchPage} />
  </Switch>
)

export default Routes
