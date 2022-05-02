import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from '../context/authContext';

const ResolveAuthScreen = () => {
    const { tryLocalLogin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalLogin();
    }, [])
    return null;
};

export default ResolveAuthScreen;