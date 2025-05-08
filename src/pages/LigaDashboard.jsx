import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Beadcumb";
import AdminLigaDashboard from "../components/AdminLigaDashboard";

const LigaDashBoard = () => {
    return(
    <>
        <Header />
        <Breadcrumb current = "Administrar ligas" />
        <AdminLigaDashboard />
    </>
    );
}

export default LigaDashBoard;