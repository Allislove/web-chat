import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import fire from './components/config/fire'
import Login from './components/Login/login';
import Home from './home/home';
import {store} from './components/redux/store';

console.log(store.getState());
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        this.authListener();
    }


    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            //console.log(user);
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.user ? (<Home/>) : (<Login/>)}
                <Router>
                    {/* Solo los usuarios logeados tendran acceso a esta ruta*/}
                    {/*<PrivateRoute path="/" exact component={HomePage} />*/}
                    <Route path="/login" component={Login} />
                    {/*<Route path="/signup" component={Register} />*/}
                </Router>
            </div>
        );
    }

}

export default App;