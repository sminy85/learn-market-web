import 'antd/dist/antd.css';
import './App.css';
import MainPageComponent from './main/index';
import UploadPage from './upload';
import ProductPage from './product';
import {Link, Switch, Route, useHistory} from 'react-router-dom';
import React from "react";
import {Button} from "antd";
import {DownloadOutlined} from '@ant-design/icons';

function App() {

    const history = useHistory();

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <Link to="/">
                        <img src="/images/icons/logo.png" alt=""/>
                    </Link>
                    <Button size="large"
                    onClick={function (){
                        history.push('/uploads');
                    }} icon={<DownloadOutlined />}
                    >
                        상품 업로드
                    </Button>
                </div>
            </div>
            <div id="body">
                <Switch>
                    <Route exact={true} path={"/"}>
                        <MainPageComponent/>
                    </Route>
                    <Route exact={true} path={"/uploads"}>
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
