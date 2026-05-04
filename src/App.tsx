import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { MainLayout } from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AdminLayout } from "./layouts/AdminLayout";

// Pages
import Beranda from "./pages/Beranda";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";

// Dashboard pages
import DashboardIndex from "./pages/dashboard";
import CategoryIndex from "./pages/dashboard/kategori/categoryindex";
import CategoryCreate from "./pages/dashboard/kategori/categorycreate";
import EventIndex from "./pages/dashboard/event/eventindex";
import EventCreate from "./pages/dashboard/event/eventcreate";
import PembicaraIndex from "./pages/dashboard/pembicara/pembicaraindex";
import PembicaraCreate from "./pages/dashboard/pembicara/pembicaracreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman dengan Header & Footer */}
        <Route path="/" element={<MainLayout children={<Beranda />} />} />
        <Route path="/competition" element={<MainLayout children={<Competition />} />} />
        <Route path="/seminar" element={<MainLayout children={<Seminar />} />} />
        <Route path="/workshop" element={<MainLayout children={<Workshop />} />} />
        <Route path="/talkshow" element={<MainLayout children={<Talkshow />} />} />

        {/* Dashboard Admin - Full page dengan sidebar */}
        <Route path="/dashboard/*" element={<AdminLayout />}>
          <Route index element={<DashboardIndex />} />
          <Route path="kategori" element={<CategoryIndex />} />
          <Route path="kategori/create" element={<CategoryCreate />} />
          <Route path="event" element={<EventIndex />} />
          <Route path="event/create" element={<EventCreate />} />
          <Route path="pembicara" element={<PembicaraIndex />} />
          <Route path="pembicara/create" element={<PembicaraCreate />} />
        </Route>

        {/* Halaman Auth (Tanpa Header Biasa) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;