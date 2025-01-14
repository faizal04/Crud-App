//app.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./features/ui/AppLayout";
import Home from "./features/ui/Home";
import Employee from "./features/ui/Employee";
import EmployeeForm from "./features/contacts/EmployeeForm";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/employee/new",
        element: <EmployeeForm />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
// import AppLayout from "./features/ui/AppLayout";
// import Home from "./features/ui/Home";
// function App() {
//   return (
//     <div>
//       <Home />
//       <AppLayout />
//     </div>
//   );
// }

// export default App;
