import React, {useState} from 'react'
import '/src/assets/css/Signup.css'
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    // const [error, setError] = useState('');

    // setError('none');
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center',minHeight: '100lvh', minWidth: '100lvw'}}>
        <video className="video-bg" autoPlay loop muted>
            <source src="/src/assets/Videos/videoplayback.webm" type="video/mp4" />
        </video>
        <div >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
      {/* Specify the grid item size for different screen sizes */}
                <Grid item xs={12} sm={6} style={{minWidth: '300px'}}>
                    {/* <div>Hello</div> */}
                    <img style={{height: '100%', width: '100%'}} src="/src/assets/Images/signupboat.jpg" alt="Description of the image" />
                </Grid>
                <Grid item xs={12} sm={6} style={{minWidth: '300px'}}>
                    {/* <Item> */}
                <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
                <div className="container">
                <div className="row align-items-center">
                <div className="card">
                    <div className="card-header px-lg-5">
                    <div className="card-heading text-primary">
                        {/* <img src="/src/assets/Images/logo.png"></img> */}
                        <h1>Welcome to The Wonderful World Of Yoga!</h1>
                        
                    </div>
              </div>
              
                    <div >
                        {/* <h1>Welcome!!! Sign up New Account</h1> */}
                        <div className="loginform">
                            <div className="border border-dark pb-3 rounded-lg" style={{width: "100%"}}>
                                <div className="text-center p-1 mb-2 text-light " >
                                <div className="notice">
                                        <div>
                                            <h2>Sign In</h2>
                                        </div>
                                        <div>
                                            <h4>Its easy</h4>
                                        </div>
                                        </div>
                                </div>
                                <form id="logf" >
                                <div className="form-group ml-3 mr-1" >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="username"
                                        // defaultValue="Hello World"
                                        type="email"
                                        style={{width: '80%'}}
                                        value={username}
                                        onChange={e => setUsername(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group ml-3 mr-1">
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        // defaultValue="Hello World"
                                        type="email"
                                        style={{width: '80%'}}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} 
                                    />
                                </div>
                                
                                <div className="form-group ml-3 mr-3">
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        style={{width: '80%'}}
                                        label="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} 
                                        required
                                        endAdornment={
                                            <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >   
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                        </InputAdornment>
                                        }
                                        // label="Password"
                                        />
                                </div>
                                <div className="form-group ml-3 mr-3">
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        style={{width: '80%'}}
                                        label="Confirm Password"
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)} 
                                        required
                                        endAdornment={
                                            <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >   
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                        </InputAdornment>
                                        }
                                        // label="Password"
                                        />
                                </div>
                                <div className="form-group ml-3 mr-1">
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Phone Number"
                                        // defaultValue="Hello World"
                                        type="text"
                                        style={{width: '80%'}}
                                        value={phoneNumber}
                                        onChange={e => setPhoneNumber(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group ml-3 mr-1">
                                    <div className='signin'><p>Already have an account??</p><a href="/">Sign in</a></div>
                                </div>
                                <div className="form-group ml-3 mr-1">
                                <Button variant="contained" color="success">
                                    Register
                                </Button>
                                </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* </Item> */}
                </Grid>
            </Grid>
        </div>
        </div>
    )
}

export default Signup;
