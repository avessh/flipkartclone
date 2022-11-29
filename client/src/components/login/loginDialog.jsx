import React from 'react'
import { Button, Dialog, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState ,useEffect } from 'react'
import { signupauthentication, loginauthentication } from '../../service/api'
import { dataContext } from '../../context/dataProvider'
import { useContext } from 'react'


const accountInititalValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialvalues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''

}

const loginInitialValues = {
    username: '',
    password: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInititalValues.login)

    const [signup, setSignup] = useState(signupInitialvalues)

    const [login, setLogin] = useState(loginInitialValues)

    const [ error, showError] = useState(false);

    const { setAccount } = useContext(dataContext)

    useEffect(() => {
        showError(false);
    }, [login])

    const handleClose = () => {
        showError(false)
        setOpen(false)
        toggleAccount(accountInititalValues.login)
    }

    const toggleSignup = () => {
        toggleAccount(accountInititalValues.signup)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
        // console.log(signup);
    }

    const signupUser = async () => {
        let response = await signupauthentication(signup);
        //   console.log(response);
        if (!response) {
            return
        }
        handleClose()

        setAccount(signup.firstname)
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async () => {
        let response = await loginauthentication(login)
        console.log(response);

        if(!response) 
        showError(true);
    else {
        showError(false);
        handleClose();
        setAccount(login.username);
    }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Box id='dialog-main-div'>
                <Box id='login-img-div'>
                    <Typography style={{ fontWeight: 'bold' }} variant='h5'>{account.heading}</Typography>
                    <Typography id='blue-div-text'>{account.subHeading}</Typography>
                </Box>
                {
                    account.view === 'login' ?
                        <Box id='login-div'>
                               <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                            { error && <Typography id='error'>Please enter valid Email ID/Mobile number</Typography> }
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            <Typography id='term-text'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button id='login-btn-dialog' onClick={() => loginUser()}>Login</Button>
                            <Typography id='or-text'>OR</Typography>
                            <Button id='request-otp-btn'>Request OTP</Button>
                            <Typography id='create-account-text' onClick={toggleSignup}>New to Flipkart? Create an account</Typography>

                        </Box>
                        :
                        <Box id='login-div'>
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />

                            <Typography id='term-text'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button type='submit' id='login-btn-dialog' onClick={signupUser}>Continue</Button>
                        </Box>
                }

            </Box>
        </Dialog>
    )
}

export default LoginDialog



