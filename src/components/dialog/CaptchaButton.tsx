import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import TurnstileWidget from "../widget/TurnstileWidget";

interface CaptchaButtonProps {
    isCaptchaDialogVisible: boolean;
    setIsCaptchaDialogVisible: (value: boolean) => void;
    setIsCaptchaSolved: (value: boolean) => void;
    setToken: (value: string) => void;
}

const CaptchaButton = ({
    isCaptchaDialogVisible,
    setIsCaptchaDialogVisible,
    setIsCaptchaSolved,
    setToken,
}: CaptchaButtonProps) => {
    return (
        <Dialog
            open={isCaptchaDialogVisible}
            onOpenChange={setIsCaptchaDialogVisible}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you a robot?</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Please complete the captcha to proceed.
                </DialogDescription>
                <TurnstileWidget
                    handleIsCaptchaSolved={setIsCaptchaSolved}
                    handleIsCaptchaDialogVisible={setIsCaptchaDialogVisible}
                    handleSetToken={setToken}
                />
            </DialogContent>
        </Dialog>
    );
};

export default CaptchaButton;
