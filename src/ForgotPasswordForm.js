import React, { Component } from 'react'

export default class ForgotPasswordForm extends Component{
    render(){
        return(
           <div className="forgotPassword">
               <h3>
                   重置密码
               </h3>
               <form className="forgotPassword" onSubmit={this.props.onSubmit}>
                   <div className="row">
                    <lable>邮箱</lable>
                    <input type="text" className="email"
                        value={this.props.formData.email}
                        onChange={this.props.onChange.bind(null,'email')} />
                </div>
                <div className="row actions">
                    <button type="submit">发送重置邮箱</button>
                    <a href="#" onClick={this.props.onSignIn}>返回登录</a>
                </div>
               </form>
           </div>
        )
    }
}