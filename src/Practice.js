// import React from 'react'

// //여러 개의 입력 항목을 가진 로그인 컴포넌트 만들기

// export default class Login extends Component {
//     constructor (props) {
//         super(props)
//         // 입력 양식의 초깃값 설정하기
//         this state = {
//             id : ' ',
//             password : ' ',
//         }
//     }
    
// //값이 변경됐을 때
// doChange (e) {
//     const userValue = e.target.value
//     const key = e. target.name
//     this this.setState({[key]: userValue})
// }

// //로그인 버튼 눌렀을 때
// do Submit (e) {
//     e.preventDefault()
//     const j = JSON.stringify(this.state)
//     window.alert(j)
// }

// //화면 렌더링
// render () {
//     //이벤트를 메서드에 바인딩하기
//     const doSumbit = (e) => this.doSumbit(e)
//     const doChange = (e) => this.doChange(e)
//     return(

//         <form onSubmit={doSumbit}>
//         <div> <label>
//         아이디 : <br />
//         <input id = 'id'
//          type = 'text'
//         value = {this.state.name}
//         onChange={doChange} />
//         </label></div>

//             <div> <label>
//              비밀번호 : <br />
//             <input password='pw'
//             type='text'
//             value={this.state.name}
//             onChange={doChange} />
//             </label></div>

//                 <input type ='submit' value='로그인' />
//                 </form>
//     )
// }
// }


// import React from 'react';

// function Login() {
//     return <h1> 로그인 페이지 </h1>;
// }

// export default Login;

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.type]: action.value
//   };
// }
// const Login = (props) => {
//     //로그인이 실패할경우 value를 true로 변경
//     const [value, setValue] = useState(false);
//     const [state, dispatch] = useReducer(reducer, {
//         email: '',
//         password: ''
//       });
//       const { email, password } = state;
//       const onChange = e => {
//         dispatch(e.target);
//       };
//           <form className={classes.root} noValidate autoComplete="off"
//             onSubmit={e => {
//               e.preventDefault();
//               return axios
//                 .post('http://localhost:4000/signin', {
//                   email: email,
//                   password: password
//                 })
//                 .then(() => {
//                   props.handleIsLoginChange();
//                   props.history.push('/');
//                 })
//                //로그인 실패시 true로 변경
//                 .catch(err => {
//                     console.log(err)
//                     setValue (true)
//                 });
//             }}
