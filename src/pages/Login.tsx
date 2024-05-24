import { useState } from "react";
import {login, logout} from '../store';
import { useDispatch, useSelector } from "react-redux";


export const Login = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username)

  return (
    <h2>
      {username}
      <input 
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({username: newUsername}))}>LOGIN</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </h2>
  );
};