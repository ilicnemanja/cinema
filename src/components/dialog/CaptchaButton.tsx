import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CaptchaButtonProps {
    isCaptchaDialogVisible: boolean;
    setIsCaptchaDialogVisible: (value: boolean) => void;
    setIsCaptchaSolved: (value: boolean) => void;
}

const CaptchaButton = ({
    isCaptchaDialogVisible,
    setIsCaptchaDialogVisible,
    setIsCaptchaSolved,
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
                <Button
                    onClick={() => {
                        setIsCaptchaSolved(true);
                        setIsCaptchaDialogVisible(false);
                    }}
                    className="custom-focus w-full rounded-lg bg-red-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-red-700"
                >
                    I'm not a robot
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default CaptchaButton;
