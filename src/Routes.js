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
    <Route path='/product/flyers' exact>
      <ProductDetails type='flyers' />
    </Route>
    <Route path='/product/posters' exact>
      <ProductDetails type='posters' />
    </Route>
    <Route path='/product/businesscards' exact>
      <ProductDetails type='businesscards' />
    </Route>
    <Route path='/cart/checkout' exact component={Checkout}></Route>
    <Route component={NoMatchPage} />
  </Switch>
)

export default Routes
