import { Routes, Route } from "react-router-dom";

// Layout do site
import SiteLayout from "../layouts/SiteLayout";
import AuthLayout from "../layouts/AuthLayout";

// 
//import PrivateRoute from "../routes/PrivateRoute";

//Site
import Home from "../pages/site/Home";
import Privacidade from "../pages/site/Privacidade";
import Termos from "../pages/site/Termos";
import NotFound from "../pages/site/NotFound";

// Páginas de autenticação
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Rotas do site */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Rotas de autenticação */}
      <Route element={<AuthLayout image="/img/login.png" />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<AuthLayout image="/img/register.png" />}>
        <Route path="/register" element={<Register />} />
      </Route>
      
    </Routes>
  );
}
