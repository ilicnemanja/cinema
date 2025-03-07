import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
    title: "CinemaBuzz | Authentication",
    description:
        "Sign in to CinemaBuzz to book movie tickets, manage reservations, and enjoy exclusive rewards.",
    keywords:
        "CinemaBuzz login, movie tickets account, sign in, register, online reservations",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative flex h-screen items-center justify-center py-3 sm:mx-auto sm:max-w-xl">
            <div className="relative mx-8 rounded-md bg-white px-4 py-10 shadow sm:p-10 md:mx-0">
                <div className="mx-auto max-w-md">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
