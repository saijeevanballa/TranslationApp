import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { history } from './store/store';
import { connect } from 'react-redux';

import NavBar from "./components/navbar/navbar";
import Dashboard from "./views/dashboard";
import Footer from "./components/footer/footer";
import AiTrans from './views/AiTrans';
import NumberTrans from './views/NumberTrans';
import RoundLoader from './components/loader/roundLoader';

function rootRouter(props) {
    return (
        <React.Fragment>
            <BrowserRouter history={history}>
                <NavBar />
                <RoundLoader show={props.loader} />
                <Routes>
                    <Route path="/AI" element={<AiTrans />} />
                    <Route path="/Number" element={<NumberTrans />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default connect(
    state => {
        return { loader: state.loader.loader };
    }, null
)(rootRouter) 