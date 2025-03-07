"use client";

import Link from "next/link";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import ENDPOINTS from "@/constants/endpoints";
import { signInSchema } from "@/lib/validations";

interface SignInResponseData {
    accessToken: string;
}

interface SignInResponse {
    accessToken?: string;
    error?: string;
    status: number;
    success: boolean;
    data?: SignInResponseData;
}

interface SignInRequestData {
    email: string;
    password: string;
}

const SignIn = () => {
    const onSubmit = async (
        data: SignInRequestData
    ): Promise<SignInResponse> => {
        const { email, password } = data;

        try {
            const response = await fetch(`${ENDPOINTS.AUTH.SIGN_IN}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }).then((res) => res.json() as Promise<SignInResponse>);

            if (response.error) {
                return {
                    error: response.error,
                    status: response.status,
                    success: false,
                };
            }

            if (response.data)
                return {
                    status: 200,
                    success: true,
                    accessToken: response.data.accessToken,
                };
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
                formType="SIGN_IN"
                schema={signInSchema}
                defaultValues={{ email: "", password: "" }}
                onSubmit={onSubmit}
            />
            <SocialAuthForm isSignIn={true} />
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
