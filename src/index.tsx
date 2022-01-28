import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dva from 'dva';
import { createHashHistory as createHistory } from 'history';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const app = dva({
    history: createHistory(),
});

app.model(require('./models/test').default); // eslint-disable-line

app.router(require('./router/router').default); // eslint-disable-line

const App = app.start();

ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <App />
    </ConfigProvider>,
    document.getElementById('root')
);
