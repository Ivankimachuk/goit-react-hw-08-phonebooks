import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/HomePage";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import ContactsPage from "pages/ContactsPage";
import NotFound from "pages/NotFound";

import { CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "config/routes";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Navigation } from "./Navigation/Navigation";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/authReducer";


const appRoutes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: REGISTER_ROUTE,
    element: <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
      <RegisterPage />
    </RestrictedRoute>,
  },
  {
    path: LOGIN_ROUTE,
    element: <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
      <LoginPage />
    </RestrictedRoute>,
  },
  {
    path: CONTACTS_ROUTE,
    element: <PrivateRoute>
      <ContactsPage />
    </PrivateRoute>,
  },
]


export function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(refreshUser());
}, [dispatch])

  return (
    <div>
    <Navigation />

    <Routes>
      {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>

  );
};
