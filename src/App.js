import React, {components} from "react";
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/Landing_page";
import Postview from "./components/PostView/Post_view";
import Update from "./components/Update/Update"


class App extends React.Component {
  render() {
     return (
       <Router>
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/postview" component={Postview}/>
              <Route path="/update" component={Update}/>
            </Switch>
            
          </div>
        </Router>
     );
  }
}
export default App;
