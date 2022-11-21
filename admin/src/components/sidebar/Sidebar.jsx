import "./sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
            <ion-icon name="home"> className="sidebarIcon" </ion-icon>
            <span className="spanIcon">Home</span>
              
            </li>
            </Link>
            <li className="sidebarListItem">
            <ion-icon name="analytics" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Analytics</span>
            </li>
            <li className="sidebarListItem">
            <ion-icon name="pulse" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
              <ion-icon name="people" className="sidebarIcon" ></ion-icon>
              <span className="spanIcon">Users</span>
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
              <ion-icon name="logo-buffer" className="sidebarIcon" ></ion-icon>
              <span className="spanIcon">Products</span>
              </li>
            </Link>
            <li className="sidebarListItem">
            <ion-icon name="logo-usd" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Transactions</span>
            </li>
            <li className="sidebarListItem">
            <ion-icon name="bar-chart-outline"  className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Reports</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            <ion-icon name="mail" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Mail</span>
            </li>
            <li className="sidebarListItem">
            <ion-icon name="arrow-undo-circle-outline" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Feedback</span>
            </li>
            <li className="sidebarListItem">
            <ion-icon name="albums-outline" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            <ion-icon name="options-outline" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Manage</span>
            </li>
            <li className="sidebarListItem">
            <ion-icon name="analytics" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Analytics</span>
            </li>
            <li className="sidebarListItem">
            <ion-icon name="bar-chart-outline" className="sidebarIcon" ></ion-icon>
            <span className="spanIcon">Reports</span>
           </li> 
         </ul>
       </div>
       </div>
    </div>
    );
}
