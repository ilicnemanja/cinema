import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialForm from "@/components/forms/SocialForm";

const SignIn = () => {
    return (
        <>
            <AuthForm isSignIn={true} />
            <SocialForm isSignIn={true} />
        </>
    );
};

export default SignIn;
