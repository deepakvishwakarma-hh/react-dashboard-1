import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100vw",
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: "#424242",
        position: 'fixed',
        top: 0,
        left: 0
    },
    root: {
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#a7a7a7',
        marginTop: theme.spacing(4),
        width: '300px'
    },
    textField: {
        margin: theme.spacing(1),
        width: '25ch',
    },
    button: {
        margin: theme.spacing(2),
        width: '25ch'
    },
}));

const Login = () => {
    const user = {
        email: 'default@mail.com',
        password: 1234
    }
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.email == email && user.password == password) {
            alert('Sucessfully Login')
            localStorage.setItem('user', 'authenticated')
            location.reload()
        } else {
            alert('Access Denied')
        }
    };

    return (
        <div className={classes.wrapper}>
            <form className={classes.root} onSubmit={handleSubmit}>
                <h1 style={{ color: "#424242" }}>Login</h1>
                <TextField
                    className={classes.textField}
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    className={classes.textField}
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;
