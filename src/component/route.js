import { Switch, Route, Redirect} from 'react-router-dom'
import ProductList from './allProduct';
import ProductDetail from './detail';

function Routing() {
    return (
        <Switch>
            <Route path="/products/:id" component={ProductDetail}/>
            <Route path="/products" component={ProductList}/>
            <Route exact path="/">
                <Redirect to="/products"></Redirect>
            </Route>
        </Switch>
    );
}
export default Routing