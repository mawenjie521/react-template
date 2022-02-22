### 说明

- 1.工程使用的是create-react-app 创建的基于typescript的react工程；

- 2.使用dva的状态管理模型；

- 3.使用redux-actions对action统一管理；

- 4.src/router为路由文件;

- 5.配置路径代理，先在config/paths.js中添加指定路径；再在config/webpack.config.js中指定alias；最后在tsconfig.json中配置；

### 开发说明

- 1.每个应用目录下都有一个pages和components目录，pages放页面，数据的处理逻辑，components放UI组件；

- 2.types目录统一放一些接口，全局接口放置在src/types里，每个应用可以建立自己的types；

- 3.models是state管理文件目录

- 4.actions是reduce调用的action的统一管理目录

- 5.router中有两个文件，router.js为pc端路由，mobileRouter.js为移动端路由；

### 为了区分环境变量，使用了handlebars模版来生产index.html

### dva使用说明

- 1.创建dva生成组件，把组件挂载到dom上

    ```javascript
    // index.tsx 入口文件
    import dva from 'dva';
    import { createBrowserHistory as createHistory } from 'history';

    const app = dva({
        history: createHistory(),// 声明history之后，在子组件中可以直接调用history进行路由切换
    });

    app.model(require('./models').default); // 加载models对象

    app.router(require('./router').default);// 加载路由

    const App = app.start();// 生成组件

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

- 2.创建models

    ```javascript
    // models/index.ts
    import { getInfo } from '../api';
    export default {
        namespace: 'app', // namespace是必须的，组件中只有models，就是靠这个namespace区分的
        state: {
            test: 'this is test',
            info: { result: 'sss' },
        },
        reducers: {
            changeTest(state: any, { payload }: { payload: any }) {
                return { ...state, test: payload };
            },
            setInfo(state: any, { payload }: any) {
                return { ...state, info: payload.content };
            },
        },
        effects: {
            *getInfo({ payload }: any, { call, put }: any): any {
                let result = null;
                try {
                    result = yield call(getInfo, payload);
                } catch (e: any) {
                    return;
                }
                yield put({
                    type: 'setInfo',
                    payload: result,
                });
                return true;
            },
        },
    };

- 3. 在组件中使用model

    ```javascript
    // home.tsx home组件
    import { connect } from 'dva';

    function HomePage(props: any) {
        return (
            <div>
                {props.value}
                {props.info.result}
            </div>
        );
    }

    function mapStateToProps({ app }: { app: any }) { // app 就是声明model时的namespace
        return {
            value: app.test,
            info: app.info,
        };
    }

    function mapDispatchToProps(dispatch: any) {
        return {
            changeTest(data: any) {
                return dispatch({ type: 'app/changeTest', payload: data }); // ‘app/changeTest’ 中的 app 是声明model时的namespace
            },
            getInfo(data: any) {
                return dispatch({ type: 'app/getInfo', payload: data });
            },
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(HomePage);// 使用connect把state和dispatch放入组件的props中
```    
### react css/less module 使用说明：

-   声明 less 或者 css 时，要加 module,如： index.module.less;

```javascript
//index.module.less
.error{
    color: red;
    .error-bg{
        color: white;
        background: red;
    }
}
```

-   使用时 import 进来，如：import styles from './index.module.less';
-   在 tsx 中使用，如： <div className={styles.error}/>

```javascript
//index.tsx
import styles from './index.module.less';

export default function Demo() {
    return (
        <div className={styles.error}>
            <span className={styles['error-bg']}>错误</span>
        </div>
    );
}
```
