import React from 'react'
import { connect } from "react-redux"
import { useLocation, Navigate } from 'react-router-dom';
function ProtectedRoute(props) {
    let location = useLocation();
    const { token, children } = props
    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
}

export default connect(
    state => {
        return { token: state.authentication.token };
    }, null
)(ProtectedRoute);