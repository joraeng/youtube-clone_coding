import multer from 'multer';
import routes from './routes';

const multerVideo = multer({dest:'uploads/videos/'}); // dest -> destination
//dest로 설정하면 자동으로 폴더가 만들어진다 ㄷㄷ 개신기해
const multerAvatar = multer({dest:'uploads/avatars/'});

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "Jotubue";
    res.locals.routes = routes; //routes.js 의 routes 객체를 가져옴
    res.locals.loggedUser = req.user || null;
    next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user){
    res.redirect(routes.home);
  }else {
    next();
  }
}

export const onlyPrivate = (req,res,next) => {
  if(req.user){
    next();
  }else{
    res.redirect(routes.home);
  }
}

export const uploadVideo = multerVideo.single('videoFile');//하나의 파일만 업로드 가능하다는 것을 의미
//name part는(single 인수 스트링) html feild의 name이다
export const uploadAvatar = multerAvatar.single('avatar');