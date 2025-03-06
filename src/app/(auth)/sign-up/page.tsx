"use client";

import Link from "next/link";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialForm from "@/components/forms/SocialForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
    return (
        <>
            <AuthForm
                formType="SIGN_UP"
                schema={SignUpSchema}
                defaultValues={{
                    name: "",
                    email: "",
                    password: "",
                    password2: "",
                }}
                onSubmit={(data) => Promise.resolve({ success: true, data })}
            />
            <SocialForm isSignIn={false} />
            <span className="mt-8 flex items-center justify-center gap-1 text-base">
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
