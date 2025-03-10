import Turnstile from "react-turnstile";

interface TurnstileWidgetProps {
    handleIsCaptchaSolved: (value: boolean) => void;
    handleIsCaptchaDialogVisible: (value: boolean) => void;
    handleSetToken: (value: string) => void;
}

export default function TurnstileWidget({
    handleIsCaptchaSolved,
    handleIsCaptchaDialogVisible,
    handleSetToken,
}: TurnstileWidgetProps) {
    const siteKey =
        process.env.NEXT_PUBLIC_ENV === "production"
            ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
            : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY_DEV;

    return (
        <Turnstile
            sitekey={siteKey!}
            onVerify={(token) => {
                handleSetToken(token);
                handleIsCaptchaSolved(true);
                handleIsCaptchaDialogVisible(false);
            }}
            refreshExpired="auto"
            theme="light"
        />
    );
}
