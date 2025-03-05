import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import SocialForm from "@/components/forms/SocialForm";

const SignUp = () => {
    return (
        <>
            <AuthForm isSignIn={false} />
            <SocialForm isSignIn={false} />
        </>
    );
};

export default SignUp;
