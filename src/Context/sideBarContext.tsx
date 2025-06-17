// src/Context/SidebarContext.jsx
import React from "react";
import { createContext, useState } from "react";


type SidebarProviderType = {
    children: React.ReactNode
}
type SidebarContextType = {
    isSidebarOpen: boolean ,
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = createContext<SidebarContextType>({
    isSidebarOpen: false,
    setIsSidebarOpen: () => {}
})


export function SidebarProvider({ children } : SidebarProviderType) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}
