import React, { Component } from 'react'
import './index.scss'
import { Input, Button } from 'element-react'
import  userInfo from '../../redux/actions/userInfo'
import { setUserInfoSession, setTokenSession } from '../../utils/utils'
import sessionKey from '../../utils/sessionKey'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                account: '',
                password: ''
            }
        }
    }
    render() {
        console.log(this.props);
        const state = this.state
        return (
            <div className={'login'}>
                <div className={'login-box'}>
                    <div className={'login-title'}>react-element 管理后台</div>
                    <Input placeholder="请输入账号" value={state.userInfo.account} onChange={this.onChangeAccount} />
                    <Input placeholder="请输入密码" value={state.userInfo.password} onChange={this.onChangePassword} className={'x-mrt-10'} />
                    <Button type="primary" className={'x-width-bf100 x-mrt-10'} onClick={this.loginHandle}>登录</Button>
                </div>
            </div>
        )
    }

    onChangeState = (attr, value) => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [attr]: value
            }
        })
    }

    onChangeAccount = (value) => {
        this.onChangeState('account', value)
    }

    onChangePassword = (value) => {
        this.onChangeState('password', value)
    }

    loginHandle = () => {
        const state = this.state
        const props = this.props
        props.userInfo(state.userInfo)
        setUserInfoSession(sessionKey.userInfo, state.userInfo)
        setTokenSession(sessionKey.adminToken, 'admin_token')
        props.history.push('/home')
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

export default connect(
    stateToProps,
    dispatchToProps,
)(Login)