// router.js
import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider , Navigate} from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

const RouterComponent = () => {
  const { isAuthReady, user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="signup" element={user ? <Navigate to="/" /> : <Signup />} />
      </Route>
    )
  );

  return (
    <>
      {isAuthReady ? (
        <RouterProvider router={router} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default RouterComponent;
