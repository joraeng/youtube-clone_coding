//컨트롤러는 어떤 일이 어떻게 발생하는지에 관한 로직

import routes from '../routes';

//global Router의 user 관련 기능 contorller
export const getJoin = (req, res) => {
    res.render('join',{pageTitle:"Join"}) ;
};
export const postJoin= (req,res) => {
    const {
        body: {name, email, password, password2}
    } =req;
    if(password!=password2){
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else{
        //사용자 등록 구현해야함 -> DB에 정보 기록
        //사용자 로그인도 구현해야함 -> 로그인 상태 체크
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => {
    res.render('login',{pageTitle:"Login"});
}
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => {
    //로그아웃 처리 시켜줘야함 -> 로그인 해제 후 비로그인 상태 체크
    res.redirect(routes.home);
}

//user Router
export const users = (req,res) => res.render('users',{pageTitle:"Users"});
export const userDetail = (req,res) => res.render("userDetail",{pageTitle:"User Detail"});
export const editProfile = (req,res) => res.render("editProfile",{pageTitle:"Edit Profile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"Change Password"});
