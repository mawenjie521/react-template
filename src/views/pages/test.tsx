import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { setValue } from '@/actions/test';
import styles from './index.module.less';

function AppTest(props: any) {
    function changeValue() {
        props.setValue('this is new app test');
    }
    return (
        <div className={styles['test']}>
            <div>{props.value}</div>
            <div>{process.env.REACT_APP_ENV}</div>
            <Button onClick={changeValue}>更新</Button>
        </div>
    );
}

function mapStateToProps({ test }: { test: any }) {
    return {
        value: test.value,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        setValue(value: string) {
            return dispatch(setValue(value));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTest);
