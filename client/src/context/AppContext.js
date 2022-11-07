import {createContext, useState,useRef,useEffect} from 'react';

import {io} from 'socket.io-client'
export const CatageoryContext=createContext(null);

const AppContext=({children})=>{
    const [item,setItem]=useState({
        name:"",
         price:0,
        timeLimit:0,
    })
    ///let SubmitBids=[];
    const [SubmitBids,setSubmitBids]=useState([
        ])

    const socket=useRef();

    useEffect(()=>{
       socket.current=io('ws://localhost:9000') 
    },[])
    return(
        <CatageoryContext.Provider value={{
            item,
            setItem,
            socket,
            SubmitBids,
            setSubmitBids,
        }}>
           {children}
        </CatageoryContext.Provider>
    )
}
export default AppContext;
