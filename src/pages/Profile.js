import { ChangeProfilePage } from "../components/ChangeProfilePage";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = (props) => {
  const {username} = useContext(AppContext);
  const {setUsername} = useContext(AppContext);
  return (
  <div> 
    Profile, user is {username}
    <ChangeProfilePage setUsername={setUsername}/>
  </div>
  )
};