import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

interface SocialFormProps {
    isSignIn: boolean;
}

const SocialAuthForm = ({ isSignIn }: SocialFormProps) => {
    const handleSignIn = async (provider: "google") => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirect: false,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="mt-5 flex items-center justify-between">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <span className="text-xs uppercase text-gray-500 dark:text-gray-400">
                    {isSignIn ? "or sign in with" : "or sign up with"}
                </span>
                <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
            <div className="mt-2 flex w-full items-center justify-center">
                <div>
                    <Button
                        onClick={() => handleSignIn("google")}
                        className="custom-focus flex w-full items-center justify-center rounded-lg bg-white px-20 py-2 text-center text-base font-semibold text-gray-700 shadow-md transition duration-200 ease-in hover:bg-gray-50"
                    >
                        <Image
                            src="/icons/google.svg"
                            alt="Google"
                            width={25}
                            height={25}
                        />
                        <span className="ml-2">
                            {isSignIn ? "Sign in" : "Sign up"} with Google
                        </span>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SocialAuthForm;
