import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

import ROUTES from "@/constants/routes";
import { getSession } from "@/lib/session";

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const session = await getSession();

    if (!session) {
        redirect(ROUTES.SIGN_IN);
    }

    return (
        <div className="h-screen bg-gray-50">
            RootLayout
            {children}
        </div>
    );
};

export default RootLayout;
