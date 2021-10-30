import React from 'react';
import "./Landing_page.css"
import landing from '../../assets/img/landing.png'
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
 
export default function Landing_page() {
  return (
      <div className="container">
          <div className="row justify-content-md-center pt-5">
              <div className="col-md-3">
                  <img src={landing} className="img" />
              </div>
              <div className="col-md-3">
                  <div className="text-center">
                  <h1>10X Team 01</h1>
                  <Link to={'/postview'} className="btn btn-success">Enter</Link>
                  </div>
              </div>
          </div>
      </div>
  )
}
