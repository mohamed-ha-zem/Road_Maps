import { createContext, useState } from "react";
import React from "react";

type BgContextProviderType = {
    children: React.ReactNode
}

type BgContextType = {
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>
}

export const BgContext = createContext<BgContextType>({
    color: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900/20',
    setColor: () => {}
})

export default function ColorProvider({ children } : BgContextProviderType) {
    const [color, setColor] = useState<string>('bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900/20'); // اللون الافتراضي
    return (
        <BgContext.Provider value={{ color, setColor }}>
            {children}
        </BgContext.Provider>
    );
}
