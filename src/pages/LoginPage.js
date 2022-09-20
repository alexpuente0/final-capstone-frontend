import './login.css';

function LoginPage() {
  return (
    <div className="loginpage">
      <h1>Login</h1>
      <div className="centered">
        <form className="myform" action="" method="POST">
          <input className="formitem" type="text" id="name" name="name" placeholder="Name" required minLength="2" maxLength="30" />
          <input className="formitem" type="password" id="password" name="password" placeholder="Password" required />
          <div className="button-wrapper">
            &nbsp;
            <button className="sbutton" type="submit">Submit</button>
            &nbsp;
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
