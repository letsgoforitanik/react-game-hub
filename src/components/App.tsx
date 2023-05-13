import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GameDetail, Home, NotFound } from "../pages";
import { Navbar } from ".";

export default function App() {
    return (
        <Fragment>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/games/:slug" element={<GameDetail />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
        </Fragment>
    );
}
