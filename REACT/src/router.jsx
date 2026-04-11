import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/home";
import Learn from "./pages/learn";

function AppRouter() {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;