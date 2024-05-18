import { useContext } from "react";
import { AppContext } from "../App";

export const Home = (props) => {
  const {username} = useContext(AppContext);
  return <h1> THIS IS THE HOME PAGE AND WELCOME {username}</h1>;
};