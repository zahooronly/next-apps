import Head from "next/head";
import Counter from "../components/Counter/Counter";
import FrontPage from "../components/FrontPage/FrontPage";
import Login from "../components/Login/Login";

const Home = () => {
  return (
    <div>
      <FrontPage />
      <Login />
      <Counter />
    </div>
  );
};
export default Home;
