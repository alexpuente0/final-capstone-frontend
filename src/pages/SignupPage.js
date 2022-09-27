/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth/auth';
import './login.css';

function SignupPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  function onSubmit({ name, email, password }) {
    return dispatch(signup(name, email, password));
  }

  return (
    <div className="loginpage">
      <h1>Sign Up</h1>
      <div className="centered">
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="formitem"
              type="text"
              {...register('name')}
              id="name"
              name="name"
              placeholder="Choose a Username"
              required
              minLength="2"
              maxLength="30"
            />
          </div>
          <div className="form-group">
            <input
              className="formitem"
              type="text"
              {...register('email')}
              id="email"
              name="email"
              placeholder="Email"
              required
              minLength="6"
              maxLength="30"
            />
          </div>
          <div className="form-group">
            <input
              className="formitem"
              type="password"
              {...register('password')}
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="button-wrapper">
            &nbsp;
            <button className="sbutton" type="submit">
              Submit
            </button>
            &nbsp;
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
