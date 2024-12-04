import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Index from './pages/Index';
import AddRecipe from './pages/AddRecipe';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EditRecipe from './pages/EditRecipe';
import ProtectedRoute from "./components/ProtectedRoute";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
      <Route path="/" element={<Index />}/>
      <Route path="/add-recipe" element={<ProtectedRoute> <AddRecipe /></ProtectedRoute>}/>
      <Route path="/edit-recipe/:id" element={<ProtectedRoute><EditRecipe /></ProtectedRoute>}/>

      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

