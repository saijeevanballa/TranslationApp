import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { history } from './store/store';

import NavBar from "./components/navbar/navbar";
import Dashboard from "./views/dashboard";
import Footer from "./components/footer/footer";
import AiTrans from './views/AiTrans';
import NumberTrans from './views/NumberTrans';

function rootRouter() {
    return (
        <React.Fragment>
            <BrowserRouter history={history}>
                <NavBar />
                <Routes>
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/AI" element={<AiTrans />} />
                    <Route path="/Number" element={<NumberTrans />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default rootRouter