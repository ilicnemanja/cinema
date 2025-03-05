import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialForm from "@/components/forms/SocialForm";
import Link from "next/link";

const SignUp = () => {
    return (
        <>
            <AuthForm isSignIn={false} />
            <SocialForm isSignIn={false} />
            <span className="mt-8 flex justify-center items-center text-base gap-1">
                Already on CinemaBuzz?{" "}
                <Link
                    className="font-display cursor-pointer text-base font-semibold text-red-500 hover:text-red-600"
                    href="/sign-in"
                >
                    Sign in
                </Link>
            </span>
        </>
    );
};

export default SignUp;
