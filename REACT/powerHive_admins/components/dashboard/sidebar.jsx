import { link , useLocation } from "react-router-dom";

function sidebar(){
    const menuItemns = [
        {name: "Home" , path: "/home"},
         {name: "Dashboard" , path: "/dashboard"},
          {name: "Zones" , path: "/zones"},
          {name: "Details" , path: "/details"}, 
    ];
    return (
        <div classname =" sidebar">
            <link to ="/home">
            <h2>⚡PowerHive Admins</h2>
            </link>
            <ul>
                {menuItemns.map((item) => {
                    <li
                    key = {item.path}
                    className = {(location.pathname.startsWith(item.path) || (item.path === "/home" && location.pathname === "/")) ? "active" : ""}>

                        <link to = {item.path} style={{textDecoration: "none" , color: "inherit" , display: "block"}}>
                        {item.name}
                        </link>
                    </li>
                })}
            </ul>
        </div>
    );
}
export default Sidebar;