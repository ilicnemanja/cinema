import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SocialFormProps {
    isSignIn: boolean;
}

const SocialForm = ({ isSignIn }: SocialFormProps) => {
    return (
        <>
            <div className="flex w-full items-center justify-center">
                <div>
                    <button className="flex w-full items-center justify-center rounded-lg bg-white px-20 py-2 text-center text-base font-semibold text-gray-700 shadow-md transition duration-200 ease-in hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                        <Image
                            src="/icons/google.svg"
                            alt="Google"
                            width={25}
                            height={25}
                        />
                        <span className="ml-2">Sign in with Google</span>
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <button
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                    type="submit"
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                    <span className="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
                        {isSignIn ? "or sign up" : "or sign in"}
                    </span>
                </Link>
                <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
        </>
    );
};

export default SocialForm;
