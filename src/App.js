import './App.css';
import MainPageComponent from './main/index';
import UploadPage from './upload';
import ProductPage from './product';
import {Switch, Route} from 'react-router-dom';
import React from "react";

function App() {
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="/images/icons/logo.png" alt=""/>
                </div>
            </div>
            <div id="body">
                <Switch>
                    <Route exact={true} path={"/"}>
                        <MainPageComponent/>
                    </Route>
                    <Route exact={true} path={"/upload"}>
                        <UploadPage/>
                    </Route>
                    <Route exact={true} path={"/products/:id"}>
                        <ProductPage/>
                    </Route>
                </Switch>
            </div>
            <div id="footer">
            </div>
        </div>
    );
}

export default App;
