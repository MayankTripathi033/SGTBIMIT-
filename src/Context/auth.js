import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState({
        _id : "",
        token : ""
    });

    //set axios default
    axios.defaults.headers.common["authorization"] = auth?.token;
    useEffect(() =>{

        const data = localStorage.getItem("authorization");
        if(data){
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                _id :parseData._id,
                token : parseData.token,
            });
        }
        //eslint-disable-next-line
    },[]);

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext);

export{useAuth, AuthProvider}