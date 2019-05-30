import { lazy } from 'react'
import asyncComponent from '../utils/asyncComponent'
const Home = asyncComponent(lazy(() => import(/* webpackChunkName: 'Home' */ '../pages/Home/Home')));
const SmsSendedLog = asyncComponent(lazy(() => import(/* webpackChunkName: 'SmsSendedLog' */ '../pages/SmsCenter/SmsSendedLog')));
const Page404 = asyncComponent(lazy(() => import(/* webpackChunkName: '404' */ '../pages/404')));
const Counter = asyncComponent(lazy(() => import(/* webpackChunkName: 'Counter' */ '../pages/Counter/Counter')));
const Login = asyncComponent(lazy(() => import(/* webpackChunkName: 'Login' */ '../pages/Login')));

// import Home from '../pages/Home/Home';
// import SmsSendedLog from '../pages/SmsCenter/SmsSendedLog'
// import Page404 from '../pages/404'
// import Counter from '../pages/Counter/Counter'
// import Login from '../pages/Login'

const routerConfig = [
    {
        path:'/',
        component:Login,
        hideMenu: true
    },{
        path: '/404',
        component: Page404,
        hideMenu: true
    },{
        path: '/login',
        component: Login,
        hideMenu: true
    },{
        path: '/home',
        component: Home,
        auth:true
    },{
        path: '/smsSendedLog',
        component: SmsSendedLog,
        auth:true
    },{
        path: '/counter',
        component: Counter,
        auth:true
    },
];

export default routerConfig