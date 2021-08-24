import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'

import Home from "./components/views/Home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;