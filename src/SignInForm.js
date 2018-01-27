import React, { Component } from 'react'

export default class SignInForm extends Component{
    render(){
        return(
            <form className="signIn" onSubmit={this.props.onSubmit}>
                <div className="row">
                    <lable>用户名</lable>
                    <input type="text" value={this.props.formData.username}
                        onChange={this.props.onChange.bind(null,'username')} />
                </div>
                <div className="row">
                    <lable>密码</lable>
                    <input type="password" className="password"
                        value={this.props.formData.password}
                        onChange={this.props.onChange.bind(null,'password')} />
                </div>
                <div className="row actions">
                    <button type="submit">登录</button>
                    <a href="javascript:;" onClick={this.props.onForgotPassword}>忘记密码了？</a>
                </div>
            </form>
        )
    }
}