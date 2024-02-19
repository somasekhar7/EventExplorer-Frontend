import "./App.css";
// import Navigation from "./components/Navbar";
// import Login from "./components/LoginPage";
// import Registration from "./components/Registration";
// import Footer from "./components/footer";
// import CarouselFunc from "./components/carousel";
import TwoFactorAuthView from "./components/otp";
// import EventForm from "./components/test";
// import UserPoll from "./components/polling";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Registration /> */}
      <TwoFactorAuthView />
      {/* <UserPoll /> */}
    </div>
  );
}

export default App;
