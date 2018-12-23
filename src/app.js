import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Audio, Camara } from './containers'
import { Header } from './Components/common'
import { MainContainer } from './syled'
export const App = ()=> {
    return (
        <div>
        <Header/>
        <MainContainer>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/audio" component={Audio}/>
                    <Route exact path="/camara" component={Camara}/>
                </Switch>
            </Router>
        </MainContainer>
        </div>
    )
  }