import React, {useState} from 'react';
import "./Update.css";
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import axios from 'axios';




export default function Update() {
    const url="http://localhost:5000/express_backend"
    const [data, setData] = useState({
        Author:"",
        Location:"",
        Discription:""
    })
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            Author:data.Author,
            Location:data.Location,
            Discription:data.Discription
        })
            .then(res =>{
                console.log(res.data)
            })
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    // const 
  return (
    <div className="container">
        <nav className="navbar p-4 navbar-light bg-light">
            <a className="navbar-brand">Instaclone</a>
        
        </nav>
        <hr/>
        <div className="row justify-content-md-center pt-5">
            <div className="card p-5 form-width">
            <form onSubmit={(e)=> submit(e)}>
                <div className="form-group">
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <input onChange={(e)=> handle(e)} id="Author" value={data.Author} type="text" className="form-control" placeholder="Author"/>
                    </div>
                    <div className="col">
                        <input onChange={(e)=> handle(e)} id="Location" value={data.Location} type="text" className="form-control" placeholder="Location"/>
                    </div>
                </div>
                <div className="form-group pt-4">
                    <input onChange={(e)=> handle(e)} id="Discription" value={data.Discription} type="text" className="form-control" placeholder="Discription"/>
                </div>
                <div className="text-center pt-4">
                  <button>Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}




// import React, { Component } from "react";
// import { Form, Button } from 'semantic-ui-react';
// import jsonfile from'jsonfile';

// var file = 'data.json'

// var obj = {name: 'JP'}


// export default class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       name: "",
//       email: ""
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.sendDataSomewhere = this.sendDataSomewhere.bind(this);
// }


// handleChange = (e, {name, value}) => {
//   this.setState({[name]: value})
// }

// sendDataSomewhere = function jsonfile(file){
// jsonfile.writeFile(file, obj, function (err) {
//   console.error(err);
// });
// };

//   render() {
//     return (
//      <div>
//       <Form onSubmit={this.sendDataSomewhere}>
//         <Form.Field>
//           <Form.Input name="name" value={this.state.name} onChange={this.handleChange}/>
//         </Form.Field>
//         <Form.Field>
//           <Form.Input name="email" value={this.state.email} onChange={this.handleChange}/>
//         </Form.Field>
//         <Button type="submit">Submit</Button>
//        </Form>
//      </div>
//     );
//   }
// }