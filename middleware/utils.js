import Router from 'next/router'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export function verifyToken(token){

    try {
        return jwt.verify(token,JWT_SECRET)
        
    } catch (error) {

        return null
        
    }
}

export function getAppCookie(req){

    const parsedItems ={}
    if(req.headers.cookie){

        const cookieItems = req.headers.cookie.split('; ')
        cookieItems?.forEach(cookies=>{
            const parsedItem = cookies.split('=')
            parsedItems[parsedItem[0]]= decodeURI(parsedItem[1])
        })

    }

    return parsedItems
}

export function absoluteUrl(req, setLocalhost) {
    var protocol = 'https:';
    var host = req
      ? req.headers['x-forwarded-host'] || req.headers['host']
      : window.location.host;
    if (host.indexOf('localhost') > -1) {
      if (setLocalhost) host = setLocalhost;
      protocol = 'http:';
    }
    return {
      protocol: protocol,
      host: host,
      origin: protocol + '//' + host,
      url: req,
    };
  }
  export function setLogout(e) {
    e.preventDefault();
    Cookies.remove('token');
    Router.push('/');
  }