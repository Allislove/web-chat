import React, { Component } from 'react';
import fire from '../components/config/fire';
import MessageArea from '../components/MessageArea';


class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    logout(){
        fire.auth().signOut();
    }
    render()
    {
        return(
            <div className="home-Container">
                <div className="userIsLogged">
                    <h1>Estas logeado!!</h1>
                    <button onClick={this.logout}>Cerrar sesión</button>
                </div>

                <div className="messageArea">
                    <MessageArea />

                </div>

            </div>
        )
    }
}
export default Home;