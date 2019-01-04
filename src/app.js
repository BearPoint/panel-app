import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Audio, Camara } from './containers'
import { Header } from './Components/common'
import { MainContainer } from './syled'
export const App = ()=> {
    return (
        <Router>
            <div>
                <Header/>
                <MainContainer>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/audio" component={Audio}/>
                        <Route exact path="/camara" component={Camara}/>
                    </Switch>
            </MainContainer>
            </div>
        </Router>
    )
  }