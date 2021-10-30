import React from 'react';
import "./Post_view.css"
import PostImg from '../../assets/img/post1.jpeg'
import camera from '../../assets/img/camera.png'
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";

 
export default function Post_view() {
  return(
    <div>
      <nav className="navbar p-4 navbar-light bg-light">
      <a className="navbar-brand">Instaclone</a>
      <Link to={'/update'}><img src={camera}/></Link>
      </nav>
      <div className="row justify-content-md-center pt-5">
        <div className="card p-0 fixed-width">
          <div className="card-header">
            <h3>Shiva</h3>
            <small>Pune</small>
          </div>
          <img className="card-img-top" src={PostImg} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}
