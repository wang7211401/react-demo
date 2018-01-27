import React from 'react'

export default function (props){
    return(
        <form className="signUp" onSubmit={props.onSubmit.bind(this)}>
            <div className="row">
                <lable>邮箱</lable>
                <input type="email" className="email"
                    value={props.formData.email} 
                    onChange={props.onChange.bind(null,'email')} />
            </div>
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
                <button type="submit">注册</button>
            </div>
        </form>
    )
}