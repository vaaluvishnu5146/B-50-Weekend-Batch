import Bin from "./Pages/Bin";
import Login from "./Pages/Login";
import Note from "./Pages/Note";
import Signup from "./Pages/Signup";
import Tasks from "./Pages/Tasks";

export const AutheticationRoutes = [
  {
    id: 1,
    name: "Login",
    component: Login,
    path: "/",
  },
  {
    id: 2,
    name: "Signup",
    component: Signup,
    path: "/signup",
  },
];

export const AuthenticatedRoutes = {
  id: 1,
  name: "Application",
  path: "/app",
  children: [
    {
      id: 11,
      name: "Notes",
      component: Note,
      path: "/app/notes",
    },
    {
      id: 12,
      name: "Tasks",
      component: Tasks,
      path: "/app/tasks",
    },
    {
      id: 13,
      name: "Bin",
      component: Bin,
      path: "/app/bin",
    },
  ],
};
