"use client";

import Link from "next/link";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialForm from "@/components/forms/SocialForm";
import { signInSchema } from "@/lib/validations";

const SignIn = () => {
    return (
        <>
            <AuthForm
                formType="SIGN_IN"
                schema={signInSchema}
                defaultValues={{ email: "", password: "" }}
                onSubmit={(data) => Promise.resolve({ success: true, data })}
            />
            <SocialForm isSignIn={true} />
            <span className="mt-8 flex items-center justify-center gap-1 text-base">
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
