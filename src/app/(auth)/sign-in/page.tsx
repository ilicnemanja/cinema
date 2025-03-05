import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialForm from "@/components/forms/SocialForm";
import Link from "next/link";

const SignIn = () => {
    return (
        <>
            <AuthForm isSignIn={true} />
            <SocialForm isSignIn={true} />
            <span className="mt-8 flex justify-center items-center text-base gap-1">
                New to CinemaBuzz?{" "}
                <Link
                    className="font-display cursor-pointer text-base font-semibold text-red-500 hover:text-red-600"
                    href="/sign-up"
                >
                    Join now
                </Link>
            </span>
        </>
    );
};

export default SignIn;
