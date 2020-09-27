import React, {Component} from 'react'

//여러 개의 입력 항목을 가진 로그인 컴포넌트 만들기

export default class Login extends Component {
    constructor (props) {
        super(props)
        // 입력 양식의 초깃값 설정하기
        this state = {
            id : ' ',
            password : ' ',
        }
    }
    
//값이 변경됐을 때
doChange (e) {
    const userValue = e.target.value
    const key = e. target.name
    this this.setState({[key]: userValue})
}

//로그인 버튼 눌렀을 때
do Submit (e) {
    e.preventDefault()
    const j = JSON.stringify(this.state)
    window.alert(j)
}

//화면 렌더링
render () {
    //이벤트를 메서드에 바인딩하기
    const doSumbit = (e) => this.doSumbit(e)
    const doChange = (e) => this.doChange(e)
    return(

        <form onSubmit={doSumbit}>
        <div> <label>
        아이디 : <br />
        <input id = 'id'
         type = 'text'
        value = {this.state.name}
        onChange={doChange} />
        </label></div>

            <div> <label>
             비밀번호 : <br />
            <input password='pw'
            type='text'
            value={this.state.name}
            onChange={doChange} />
            </label></div>

                <input type ='submit' value='로그인' />
                </form>
    )
}
}