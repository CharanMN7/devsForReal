import "./auth.css";

export const AuthStuff = () => {
  return (
    <form id="authstuff">
      <div>
        <label htmlFor="" className="roboto-mono">
          $ sudo email=
        </label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="" className="roboto-mono">
          $ sudo _pswd=
        </label>
        <input type="password" />
      </div>
      <div>
        <a href="" className="btn">
          Login
        </a>{" "}
        &nbsp; or &nbsp;
        <a href="" className="link">
          Sign Up!
        </a>
      </div>
    </form>
  );
};
