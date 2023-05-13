import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from ".";
import { GameDetail, Home, NotFound } from "../pages";

export default function App() {
    return (
        <Fragment>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/games/:id" element={<GameDetail />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
        </Fragment>
    );
}
