import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/Home'



export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/publish' />
        <Route exact path='/publish' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}