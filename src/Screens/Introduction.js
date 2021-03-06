import logo from "../Images/logo.png";

const Introduction = (props) => {
  const welcome = "Welcome";
  setTimeout(() => {
    props.history.push("/Home");
  }, 13000);
  const time = new Date().getTime();
  const expiredTime = time + 3000;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img
            src={logo}
            alt="logo"
            width="50%"
            height="50%"
            style={{ borderRadius: "50px" }}
            className="rounded Introduction-logo mb-5"
          />
          {expiredTime < new Date().getTime() ? welcome : ""}
          <div className="Introduction-name Introduction-Rex">REX</div>
          <div className="Introduction-Dreams">DREAMS</div>
        </div>
      </header>
    </div>
  );
};
export default Introduction;
