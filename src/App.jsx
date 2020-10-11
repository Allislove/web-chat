import React, { useEffect } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    useHistory,
    useLocation

} from 'react-router-dom';

import './App.css';
import fire from './components/config/fire'
import Login from './components/Login/login';
import Register from './components/Register/register';

import Home from './home/home';
// import {store} from './components/redux/store';
import './home/style.css'


// console.log(store.getState());
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


     PrivateRoute({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ user }) =>
                    fire.isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: user }
                            }}
                        />
                    )
                }
            />
        );
    }

    render() {
        return (
            <div className="App">
                {this.state.user ? (<Home/>) : (<Login/>)}
                <Router>

                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                        </ul>
                    </nav>

                    {/*/!* Solo los usuarios logeados tendran acceso a esta ruta*!/*/}
                    {/*/!*<PrivateRoute exact path="/home" exact component={Home} />*!/*/}
                    {/*<Route path="/login" component={Login} />*/}
                    {/*/!*<Route path="/signup" component={Register} />*!/*/}
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/">
                            <h1>
                                Bienvenidos a mi Web Chat App
                            </h1>
                        </Route>
                    </Switch>
                </Router>


            </div>
        );
    }

}

export default App;