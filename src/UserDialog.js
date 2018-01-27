import React, { Component } from 'react'
import './UserDialog.css'
import { signUp, signIn, sendPasswordResetEmail } from './leanCloud'
import ForgotPasswordForm from './ForgotPasswordForm'
import SignInOrSignUp from './SignInOrSignUp'

export default class UserDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'signInOrSignUp',
            formData: {
                email: '',
                username: '',
                password: ''
            }
        }
    }
    signUp(e) {
        e.preventDefault()
        let {email, username, password} = this.state.formData
        let success = (user) => {
            window.location.reload()
            console.log(user)
            this.props.onSignUp.call(null, user)
        }
        let error = (error) => {
            switch (error.code) {
                case 201:
                    alert('没有提供密码，或者密码为空')
                    break
                case 202:
                    alert('用户名已被占用，请重新输入')
                    break
                case 203:
                    alert('邮箱地址已被占用,请重新输入')
                    break
                case 205:
                    alert('找不到电子邮箱地址对应的用户')
                    break
                case 217:
                    alert('无效的用户名，请重新输入')
                    break
                case 218:
                    alert('无效的密码，请重新输入')
                    break
                case 219:
                    alert('登录失败次数超过限制，请稍候再试，或者通过忘记密码重设密码')
                    break
                case 251:
                    alert('无效的账户连接')
                    break
                default:
                    alert(error)
                    break
            }
        }
        signUp(email, username, password, success, error)
    }
    signIn(e) {
        e.preventDefault()
        let {username, password} = this.state.formData
        let success = (user) => {
            window.location.reload()
            this.props.onSignIn.call(null, user)
        }
        let error = (error) => {
            switch (error.code) {
                case 201:
                    alert('没有提供密码，或者密码为空')
                    break
                case 210:
                    alert('用户名与密码不匹配')
                    break
                case 211:
                    alert('用户名不存在或密码错误')
                    break
                case 217:
                    alert('无效的用户名，请重新输入')
                    break
                case 218:
                    alert('无效的密码，请重新输入')
                    break
                case 219:
                    alert('登录失败次数超过限制，请稍候再试，或者通过忘记密码重设密码')
                    break
                case 251:
                    alert('无效的账户连接')
                    break
                default:
                    alert(error)
                    break
            }
        }
        signIn(username, password, success, error)
    }
    changeFormData(key, e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.formData[key] = e.target.value
        this.setState(stateCopy)
    }
    render() {
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    {
                        this.state.selectedTab === 'signInOrSignUp' ?
                            <SignInOrSignUp formData={this.state.formData}
                                onSignUp={this.signUp.bind(this)}
                                onSignIn={this.signIn.bind(this)}
                                onChange={this.changeFormData.bind(this)}
                                onForgotPassword={this.showForgotPassword.bind(this)}
                            /> :
                            <ForgotPasswordForm formData={this.state.formData}
                                onSubmit={this.resetPassword.bind(this)}
                                onChange={this.changeFormData.bind(this)}
                                onSignIn={this.returnToSignIn.bind(this)}
                            />
                    }
                </div>
            </div>
        )
    }
    showForgotPassword() {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'forgotPassword'
        this.setState(stateCopy)
    }
    returnToSignIn() {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'signInOrSignUp'
        this.setState(stateCopy)
    }
    resetPassword(e) {
        e.preventDefault()
        sendPasswordResetEmail(this.state.formData.email)
    }
}