import React, { Component } from 'react'

export default class SignUpForm extends Component{
    render(){
        return(
            <form className="signUp" onSubmit={this.props.onSubmit}>
                <div className="row">
                    <lable>邮箱</lable>
                    <input type="email" className="email"
                        value={this.props.formData.email} 
                        onChange={this.props.onChange.bind(null,'email')} />
                </div>
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
                    <button type="submit">注册</button>
                </div>
            </form>
        )
    }
}