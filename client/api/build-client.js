import axios from 'axios'

export default ({req})=>{
    if (typeof window =='undefined'){  //for hard refresh window is undefined, and api is called from server not client side;
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        })
    }else{
        return axios.create({
            baseURL: '/'
        })
    }
}