import React from "react";

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
                        <label
                            className="block pb-1 text-sm font-semibold text-gray-600"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="no-focus mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                            type="text"
                            id="name"
                        />
                    </>
                ) : null}
                <label
                    className="block pb-1 text-sm font-semibold text-gray-600"
                    htmlFor="login"
                >
                    E-mail
                </label>
                <input
                    className="no-focus mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    type="text"
                    id="login"
                />
                <label
                    className="block pb-1 text-sm font-semibold text-gray-600"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="no-focus mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                    type="password"
                    id="password"
                />
            </div>
            <div className="mb-4 text-right">
                <a
                    className="font-display cursor-pointer text-xs font-semibold text-gray-500 hover:text-gray-600"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </>
    );
};

export default AuthForm;
