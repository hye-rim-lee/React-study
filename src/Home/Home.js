import React from "react";
import {Route, Link} from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>
                기본 홈페이지
            </h1>
        </div>
    );
};

export default Home;

// import React from 'react';

// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
// import Login from './Login';

// //리액트 라우터를 사용해 메인 컴포넌트를 정의한다.

// const  = () => (
//     <Router>
//         <div style = {{margin: 20}}>
//             <Route exact path ='/' component ={Home}/>
//             <Route path ='/login' component = {Login} />
//         </div>
//     </Router>
// )

// //홈 화면에 출력할 컴포넌트를 정의한다.

// const Home = () => (
//     <div>
//         <h1> 회원 로그인 </h1>
//     </div>
// )