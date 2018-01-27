import AV from 'leancloud-storage'

var APP_ID = 'hnbmR2n8p1oBhzhuPxmghcoR-gzGzoHsz';
var APP_KEY = 'DPl4EYql3RSfSPOi2o5BehYI';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV

export function signUp(email,username,password,sucessFn,errorFn){
    console.log(username)
    console.log(password)
    var user = new AV.User();
    // 设置用户名
    user.setUsername(username);
    // 设置密码
    user.setPassword(password);
    // 设置邮箱
    user.setEmail(email);

    user.signUp().then(function (loginedUser) {
        let user = getUserFromAVUser(loginedUser)
        sucessFn.call(null,user)
    }, function (error) {
        errorFn.call(null,error)
    })
    return undefined
}

export function signIn(username,password,sucessFn,errorFn){
    AV.User.logIn(username, password).then(function (loginedUser) {
        let user = getUserFromAVUser(loginedUser)
        sucessFn.call(null,user)
    }, function (error) {
        errorFn.call(null,error)
    });
    return undefined
}
export function getCurrentUser(){
    let user = AV.User.current()
    if(user){
        return getUserFromAVUser(user)
    }else{
        return null
    }
}
export function signOut(){
    AV.User.logOut()
    return undefined
}
export function sendPasswordResetEmail(email,sucessFn,errorFn){
    AV.User.requestPasswordReset(email).then(function (success) {
        sucessFn.call()
    }, function (error) {
        errorFn.call(null,error)
    });
    return undefined
}
function getUserFromAVUser(AVUser){
    console.log(AVUser)
    return {
        id:AVUser.id,
        ...AVUser.attributes
    }
}