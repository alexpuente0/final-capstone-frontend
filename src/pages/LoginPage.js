import './login.css';

function LoginPage() {
  return (
    <div className="loginpage">
      <h1>Login</h1>
      <div className="centered">
        <form className="myform" action="https://formspree.io/f/mknyzadl" method="POST">
          <input className="formitem" type="text" id="name" name="name" placeholder="Name" required minLength="2" maxLength="30" />
          <input className="formitem" type="email" id="email" name="email" placeholder="Email Address" required />
          <div className="button-wrapper">
            &nbsp;
            <button className="button" type="submit">Submit</button>
            &nbsp;
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
