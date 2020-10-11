import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import fire from '../config/fire';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div >
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input value={this.state.name} onChange={this.handleChange}
                                   type="text" name="name" className="form-control"
                                   id="exampleInputName1" aria-describedby="nameHelp"
                                   placeholder="Enter name"/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input value={this.state.email} onChange={this.handleChange}
                                   type="email" name="email" className="form-control"
                                   id="exampleInputEmail1" aria-describedby="emailHelp"
                                   placeholder="Enter email"/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handleChange}
                                   type="password" name="password" className="form-control"
                                   id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button onClick={this.signup} style={{marginLeft: '25px'}}
                                className="btn btn-success">Registrarse
                        </button>
                        <small id="emailHelp"
                               className="form-text text-muted">
                                Tus datos son 100% encriptados.</small>
                    </form>

                </div>


            </div>
        );
    }
}
export default Register;