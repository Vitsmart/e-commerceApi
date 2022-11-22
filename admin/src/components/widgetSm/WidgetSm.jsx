import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import "./widgetSm.css";
//import { Visibility } from "@material-ui/icons";
import avatar from "../../images/userImg2.png"

export default function WidgetSm() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    const getUsers = async () =>{
      try {
        const res = await userRequest.get("users/?new=true");
       setUsers(res.data);
      }catch(err){}
    }
    getUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        { users.map((user) => (
        <li className="widgetSmListItem" key={user.id}>
          <img
            src={avatar}
            alt="avatar"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">customer</span>
          </div>
          <button className="widgetSmButton">
          <ion-icon name="eye-outline" className="widgetSmIcon" ></ion-icon>
            Display
          </button>
          </li>
          ))}
        
        
      </ul>
    </div>
  );
}
