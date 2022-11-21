import React from "react";
import "./topbar.css";
//import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN DASHBOARD</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <ion-icon name="mail-unread-outline"></ion-icon>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <ion-icon name="mic-off-circle-outline"></ion-icon>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <ion-icon name="settings-outline"></ion-icon>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
