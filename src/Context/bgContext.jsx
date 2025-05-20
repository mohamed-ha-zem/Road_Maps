import { createContext, useState } from "react";

export const BgContext = createContext("null");

export default function ColorProvider({ children }) {
    const [color, setColor] = useState('bg-gradient-to-br from-purple-900 to-gray-900'); // اللون الافتراضي
    return (
        <BgContext.Provider value={{ color, setColor }}>
            {children}
        </BgContext.Provider>
    );
}