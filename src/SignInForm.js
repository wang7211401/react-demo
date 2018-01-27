import React from 'react'

export default function (props){
    return(
        <form className="signIn" onSubmit={props.onSubmit}>
            <div className="row">
                <lable>用户名</lable>
                <input type="text" value={props.formData.username}
                    onChange={props.onChange.bind(null,'username')} />
            </div>
            <div className="row">
                <lable>密码</lable>
                <input type="password" className="password"
                    value={props.formData.password}
                    onChange={props.onChange.bind(null,'password')} />
            </div>
            <div className="row actions">
                <button type="submit">登录</button>
                <a href="javascript:;" onClick={props.onForgotPassword}>忘记密码了？</a>
            </div>
        </form>
    )
}