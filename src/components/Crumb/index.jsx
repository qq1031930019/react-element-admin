import React, { Component } from "react";
import { Breadcrumb, Dropdown } from 'element-react';
import { withRouter } from 'react-router-dom'
import './index.scss'
import { CRUMB_PRIMARY, CRUMB_SECONDARY } from '../../config/crumbConfig'
import  userInfo from '../../redux/actions/userInfo'
import { setTokenSession, setUserInfoSession, getUserInfoSession } from '../../utils/utils'
import sessionKey from '../../utils/sessionKey'
import { connect } from 'react-redux'

class Crumb extends Component {
    constructor(props) {
        super(props)
        props.history.listen((location) => {    // 监听location
            console.log(location.pathname);
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className={'crumb'}>
                <div>当前位置:</div>
                <Breadcrumb separator="/">
                    <Breadcrumb.Item>{ CRUMB_PRIMARY[this.props.history.location.pathname] }</Breadcrumb.Item>
                    <Breadcrumb.Item>{ CRUMB_SECONDARY[this.props.history.location.pathname] }</Breadcrumb.Item>
                </Breadcrumb>
                <div className={'userInfo'}>
                    <span className={'welcome'}>欢迎☞</span>
                    <Dropdown trigger="click" menu={(
                        <Dropdown.Menu>
                            <Dropdown.Item className="clearfix">
                                <span>修改密码</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="clearfix">
                                <span onClick={ this.toLogin }>退出</span>
                                {/* <Badge className="mark" value={3} /> */}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    )}
                    >
                        <span className="el-dropdown-link">
                            { getUserInfoSession(sessionKey.userInfo).account }<i className="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                    </Dropdown>
                </div>
            </div>
        );
    }

    routerWillLeave(nextLocation) {
        console.log(nextLocation);
    }

    toLogin = () => {
        this.props.userInfo({})
        setUserInfoSession(sessionKey.userInfo, {})
        setTokenSession(sessionKey.adminToken, '')
        this.props.history.push('/login')
    }

}

const stateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const dispatchToProps = (dispatch) => {
    return {
        userInfo: (data) => {
            dispatch(userInfo(data))
        }
    }
}

export default withRouter(connect(stateToProps, dispatchToProps)(Crumb))