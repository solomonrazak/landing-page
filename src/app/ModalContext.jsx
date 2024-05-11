"use client";
import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/Navbar';
import {useState, createContext, useContext} from 'react';

const ModalContext = createContext();

export function Modal({children}){
    const [modal, setModal] = useState(false);

   return (
    <ModalContext.Provider value={{modal, setModal}}>
        {children}
    </ModalContext.Provider>
   ) 
}

export function useModalContext(){
    return useContext(ModalContext);
}
