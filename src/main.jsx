import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx';
import Page01 from './components/1.2_pages/Page01.jsx';
import Page02 from './components/1.2_pages/Page02.jsx';
import Page03 from './components/1.2_pages/Page03.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "page01",
        element: <Page01 />,
      },
      {
        path: "page02",
        element: <Page02 />,
      },
      {
        path: "page03",
        element: <Page03 />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
