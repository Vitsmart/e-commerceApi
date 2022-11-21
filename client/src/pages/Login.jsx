import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { mobile } from '../responsive'

import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";



const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: purple;
display: flex;
justify-content: center;
align-items: center;`

const Wrapper = styled.div`
padding: 20px;
width:30%;
background-color: white;
${mobile({ width: "75%"})};
`
const Form = styled.form`
display: flex;
flex-direction: column;`
const Title = styled.h1`
font-size:24px;
font-weight: 300;`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Button = styled.button`
width: 100%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
&:disabled{
    color:gray;
    cusor: not-allowed;
}`
const Error = styled.span`
color: red;
display: flex;
justify-content:center;`

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const dispatch = useDispatch();
const { isFetching, error} = useSelector((state) => state.user);


const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try{
const res = await publicRequest.post("/auth/login", user);
dispatch(loginSuccess(res.data));
} catch(err){
        dispatch(loginFailure())
    }
}

const handleLogin = (e)=>{
e.preventDefault()
login(dispatch, { username, password })
}

return (
    <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                <Input placeholder="username"
                onChange={(e) => setUsername(e.target.value)}/>
                <Input type="password" placeholder="password"
                onChange={(e) => setPassword(e.target.value)}/>
            
                <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                  {error &&  <Error>Something went wrong!</Error>}
                    <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                
            </Form>
        </Wrapper>
    </Container>

  )
}
