import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,

} from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/admin/default";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/dataTables";

const routes = [
  {
    name: "BIENESTAR",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "RESULTADOS",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/resultados",
    component: DataTables,
  },
  // {
  //   name: "INFORMACION",
  //   layout: "/admin",
  //   path: "/informacion",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },

];

export default routes;
