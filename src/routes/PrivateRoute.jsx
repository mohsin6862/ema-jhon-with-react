import React, { useContext } from 'react';
import { UserContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(UserContext)
    const location = useLocation()

    if(loader){
        return <div className='w-full text-center mt-40 '><progress className="progress progress-success w-56 "></progress></div>
    }
    if(user){
        return children

    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;