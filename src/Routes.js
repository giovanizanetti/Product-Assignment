import { Route, Switch } from "react-router-dom";
import Home from './views/Home'
import ProductDetails from './views/ProductDetails'
// your components
// const MissingPage = () => <h1>404</h1>;

const Routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/:product" component={ProductDetails} />
    {/* <Route component={MissingPage} /> */}
  </Switch>
);

export default Routes;