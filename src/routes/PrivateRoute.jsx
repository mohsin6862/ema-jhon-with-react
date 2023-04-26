import React, { useContext } from 'react';
import { UserContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}= useContext(UserContext)

    if(loader){
        return <div className='w-full text-center mt-40 '><progress className="progress progress-success w-56 "></progress></div>
    }
    if(user){
        return children

    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;