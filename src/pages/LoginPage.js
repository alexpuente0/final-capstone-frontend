/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../redux/auth/auth';
import './login.css';

function LoginPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const authUser = useSelector((state) => state.auth.user);
  const authError = useSelector((state) => state.auth.error);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // redirect to from if already logged in
    if (authUser) {
      const { from } = location.state || { from: { pathname: '/' } };
      navigate(from.pathname);
    }
  }, [authUser, location.state, navigate]);

  function onSubmit({ email, password }) {
    return dispatch(login(email, password));
  }

  return (
    <div className="loginpage addreservpage">
      <h1>Login</h1>
      <div className="centered">
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input className="formitem" type="text" {...register('email')} id="email" name="email" placeholder="Email" required minLength="2" maxLength="30" />
          </div>
          <div className="form-group">
            <input className="formitem" type="password" {...register('password')} id="password" name="password" placeholder="Password" required />
          </div>
          <div className="button-wrapper">
            &nbsp;
            <button className="sbutton" type="submit">Submit</button>
            &nbsp;
          </div>
          {authError && <div className="alert alert-danger mt-3 mb-0">{authError.message}</div>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
