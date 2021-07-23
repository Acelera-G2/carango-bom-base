import React from 'react';
import { Avatar, CssBaseline, makeStyles, Typography, Container, Link, Grid   } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {InputGeneric, ButtonGeneric} from '../../components';
import useForm from '../../hooks/useForm';
import { validateFormLogin } from '../../validations/validation';
import { useAuth } from '../../hooks/AuthContext';
import AuthService from '../../services/AuthService/AuthService';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(0, 'auto'),
    display: 'flex',
    marginBottom: theme.spacing(5),
  },
}));

const  Login = () => {
  const { sigIn } = useAuth();

  const classes = useStyles();
  const initialValues = {
    username: '',
    password: '',
  }

  const { values, errors, handleChange, handleSubmit, setValues } = useForm(
    initialValues,
    formControl,
    validateFormLogin,
    );

    async function formControl (){
       try{
         sigIn({
          username: values.username,
          password: values.password
        })
       }
       catch(err){
        console.log(err)
       }
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <InputGeneric
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            autoComplete="email"
            autoFocus
            name="username"
            value={values.username}
            handleChange={handleChange}
            helperText={errors.username}
            error={!!errors.username}

          />
          <InputGeneric
            name="password"
            value={values.password}
            handleChange={handleChange}
            helperText={errors.password}
            error={!!errors.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <ButtonGeneric
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            text="Entrar"
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem cadastro? Cadastre-se aqui!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default Login;
