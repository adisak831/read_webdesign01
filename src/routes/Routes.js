import PrivateLayout from "../layout/PrivateLayout";

//private
import MainUser from "../views/private/users/MainUser";
import FormUser from "../views/private/users/FormUser";
import MainProject from "../views/private/project/MainProject";
import FormProject from "../views/private/project/FormProject";
//import FormProject from "../views/private/project/formProject";

const Routes = [
  {
    path: "/",
    name: "ข้อมูลผู้ใช้งาน",
    component: MainUser,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainUser",
    name: "ข้อมูลผู้ใช้งาน",
    component: MainUser,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainUser/FormUser",
    name: "เพิ่มผู้ใช้งาน",
    component: FormUser,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/MainProject",
    name: "ข้อมูลโครงการ",
    component: MainProject,
    role: 0,
    layout: PrivateLayout,
  },
  {
    path: "/FormProject",
    name: "เพิ่มโครงการ",
    component: FormProject,
    role: 0,
    layout: PrivateLayout,
  },
];
export default Routes;