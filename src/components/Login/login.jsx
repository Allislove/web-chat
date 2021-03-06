import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
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
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input value={this.state.email} onChange={this.handleChange}
                                   type="email" name="email" className="form-control"
                                   id="exampleInputEmail1" aria-describedby="emailHelp"
                                   placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">Tus datos son
                                100% encriptados.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handleChange}
                                   type="password" name="password" className="form-control"
                                   id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" onClick={this.login}
                                className="btn btn-primary">Login
                        </button>
                        <button onClick={this.signup} style={{marginLeft: '25px'}}
                                className="btn btn-success">Registrarse
                        </button>
                    </form>

                </div>


            </div>
        );
    }
}
export default Login;