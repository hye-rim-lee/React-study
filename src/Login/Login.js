import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import logo from '../assets/domisol.jpg';
import logo2 from '../assets/heart.jpg';
import Typography from '@material-ui/core/Typography';

/*React의 ui framwork인 material-ui를 사용
https://material-ui.com/ 이걸로 인풋이랑 버튼효과 넣는거

Margin은 Object와 화면과의 여백(외부여백)을 말하며,
Padding은 Object내의 내부여백을 의미
theme.spacing(number) 숫자1당 8px를 의미
일반숫자로 대중없이 적기보다는 규칙 있는게
더 유지보수성은 물론 가독성 또한 편리하다고 합니다
*/

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    logo: {
        marginTop: theme.spacing(16),
    },
    logoTitle: {
        marginTop: theme.spacing(1),
        fontSize: theme.spacing(2),
        marginBottom: theme.spacing(10),
    },
    textField1: {
        backgroundColor: 'white',
    },
    textField2: {
        backgroundColor: 'white',
        marginBottom: theme.spacing(6),
    },
    bottom: {
        marginBottom: theme.spacing(1),
    },
    background: {
        backgroundImage: `url("${logo2}")`, //이미지 사용하기
        backgroundSize: 'cover', //전체화면
        height: '100vh', //화면 100% 꽉차게
    },
}));

const Login = () => {
    const classes = useStyles(); //상수에 넣고 쓰는게 깔끔할듯
    return (
        <div className={classes.background}>
            <Container className={classes.root}>
                <img alt="logo" src={logo} className={classes.logo} />
                <Typography align="center" className={classes.logoTitle}>
                    로그인 페이지
                </Typography>
            </Container>

            <Container>
                <TextField
                    className={classes.textField1} //만들어 둔 스타일을 적용
                    label="ID" //양식 입력창을 설명함
                    variant="filled" //Box 테두리
                    fullWidth //container의 전체 넓이를 차지
                    required //필수값체크
                />
                <TextField
                    className={classes.textField2}
                    margin="normal" //아이디와 비밀번호 사이의 간격을 줌
                    label="PASSWORD"
                    variant="filled"
                    fullWidth
                    required
                />
                <Button
                    className={classes.bottom}
                    fullWidth
                    variant="contained"
                    color="primary" 
                    size="large"
                >
                    로그인
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    회원가입
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    margin=""
                >
                    아이디 찾기
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    비밀번호 찾기
                </Button>
            </Container>
        </div>
    );
};

export default Login;
