import React from "react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface AuthFormProps {
    isSignIn: boolean;
}

const AuthForm = ({ isSignIn }: AuthFormProps) => {
    return (
        <>
            <div className="font-display flex items-center justify-center space-x-5 text-2xl font-semibold text-gray-800">
                {isSignIn ? "Welcome Back! 👋" : "Create an Account 🚀"}
            </div>
            <div className="mt-5">
                {!isSignIn ? (
                    <>
                        <Label
                            className="block pb-1 text-sm font-semibold text-gray-600"
                            htmlFor="name"
                        >
                            Name
                        </Label>
                        <Input
                            className="no-focus mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                            id="name"
                            type="text"
                        />
                    </>
                ) : null}
                <Label
                    className="block pb-1 text-sm font-semibold text-gray-600"
                    htmlFor="email"
                >
                    Email Address
                </Label>
                <Input
                    className="no-focus mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    id="email"
                    type="email"
                />
                <Label
                    className="block pb-1 text-sm font-semibold text-gray-600"
                    htmlFor="password"
                >
                    Password
                </Label>
                <Input
                    className="no-focus mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    id="password"
                    type="password"
                />
                {!isSignIn ? (
                    <>
                        <Label
                            className="block pb-1 text-sm font-semibold text-gray-600"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </Label>
                        <Input
                            className="no-focus mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                            id="confirmPassword"
                            type="password"
                        />
                    </>
                ) : null}
            </div>
            {isSignIn ? (
                <div className="text-right">
                    <Link
                        className="font-display cursor-pointer text-xs font-semibold text-gray-500 hover:text-gray-600"
                        href="#"
                    >
                        Forgot Password?
                    </Link>
                </div>
            ) : null}
            <div className="mt-5 mb-5">
                <Button
                    className="w-full rounded-lg bg-red-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-red-700 custom-focus"
                    type="submit"
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </Button>
            </div>
        </>
    );
};

export default AuthForm;
