import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-gray-50 h-screen">
            RootLayout
            {children}
        </div>
    );
};

export default RootLayout;
