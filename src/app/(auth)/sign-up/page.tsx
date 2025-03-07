"use client";

import Link from "next/link";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import ENDPOINTS from "@/constants/endpoints";
import { SignUpSchema } from "@/lib/validations";

interface SignUpResponse {
    error?: string;
    status: number;
    success: boolean;
}

interface SignUpRequestData {
    name: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const onSubmit = async (
        data: SignUpRequestData
    ): Promise<SignUpResponse> => {
        const { name, email, password } = data;

        try {
            const response = await fetch(`${ENDPOINTS.AUTH.SIGN_UP}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name }),
            }).then((res) => res.json() as Promise<SignUpResponse>);

            if (response.error) {
                return {
                    error: response.error,
                    status: response.status,
                    success: false,
                };
            }

            if (response.status === 201)
                return { status: response.status, success: true };
        } catch (error) {
            if (error instanceof Error) {
                return { error: error.message, status: 400, success: false };
            } else {
                return {
                    error: "An unknown error occurred",
                    status: 400,
                    success: false,
                };
            }
        }
        return { status: 400, success: false };
    };

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
                onSubmit={onSubmit}
            />
            <SocialAuthForm isSignIn={false} />
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
