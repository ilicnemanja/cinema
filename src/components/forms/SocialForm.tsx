import Image from "next/image";
import React from "react";

interface SocialFormProps {
    isSignIn: boolean;
}

const SocialForm = ({ isSignIn }: SocialFormProps) => {
    return (
        <>
            <div className="mt-5 flex items-center justify-between">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <span className="text-xs uppercase text-gray-500 dark:text-gray-400">
                    {isSignIn ? "or sign in with" : "or sign up with"}
                </span>
                <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
            <div className="flex w-full items-center justify-center mt-2">
                <div>
                    <button className="flex w-full items-center justify-center rounded-lg bg-white px-20 py-2 text-center text-base font-semibold text-gray-700 shadow-md transition duration-200 ease-in hover:bg-gray-50 custom-focus">
                        <Image
                            src="/icons/google.svg"
                            alt="Google"
                            width={25}
                            height={25}
                        />
                        <span className="ml-2">
                            {isSignIn ? "Sign in" : "Sign up"} with Google
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SocialForm;
