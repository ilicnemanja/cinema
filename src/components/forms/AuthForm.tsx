"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    DefaultValues,
    FieldValues,
    Path,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";

import CaptchaButton from "../dialog/CaptchaButton";

interface AuthFormProps<T extends FieldValues> {
    formType: "SIGN_IN" | "SIGN_UP";
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{
        accessToken?: string;
        error?: string;
        status: number;
        success: boolean;
    }>;
}

const AuthForm = <T extends FieldValues>({
    formType,
    schema,
    defaultValues,
    onSubmit,
}: AuthFormProps<T>) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isCaptchaDialogVisible, setIsCaptchaDialogVisible] = useState(false);
    const [isCaptchaSolved, setIsCaptchaSolved] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const greetingText =
        formType === "SIGN_IN" ? "Welcome Back! 👋" : "Create an Account 🚀";
    const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

    const handleSubmit: SubmitHandler<T> = async (data) => {
        if (!isCaptchaSolved) {
            setIsCaptchaDialogVisible(true);
            return;
        }

        const result = await onSubmit(data);
        if (result?.accessToken) {
            router.push(ROUTES.HOME);
        } else if (result.success) {
            router.push(ROUTES.SIGN_IN);
        } else {
            setErrorMessage(result?.error ?? null);
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6"
                >
                    <div className="font-display flex items-center justify-center space-x-5 text-2xl font-semibold text-gray-800">
                        {greetingText}
                    </div>

                    {errorMessage ? (
                        <p className="paragraph-regular mt-2 flex justify-center">
                            {errorMessage}
                        </p>
                    ) : null}

                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem className="flex w-full flex-col">
                                    <FormLabel className="block pb-1 text-sm font-semibold text-gray-600">
                                        {field.name === "email"
                                            ? "Email Address"
                                            : field.name === "password2"
                                            ? "Confirm Password"
                                            : field.name
                                                  .charAt(0)
                                                  .toUpperCase() +
                                              field.name.slice(1)}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            required
                                            type={
                                                field.name === "password" ||
                                                field.name === "password2"
                                                    ? "password"
                                                    : "text"
                                            }
                                            {...field}
                                            className="no-focus mb-5 mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    {formType === "SIGN_IN" ? (
                        <div className="text-right">
                            <Link
                                className="font-display cursor-pointer text-xs font-semibold text-gray-500 hover:text-gray-600"
                                href="#"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    ) : null}
                    <div className="my-5">
                        <Button
                            disabled={form.formState.isSubmitting}
                            className="custom-focus w-full rounded-lg bg-red-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-red-700"
                            type="submit"
                        >
                            {form.formState.isSubmitting
                                ? buttonText === "Sign In"
                                    ? "Signing In..."
                                    : "Signing Up..."
                                : buttonText}
                        </Button>
                    </div>
                </form>
            </Form>

            <CaptchaButton
                isCaptchaDialogVisible={isCaptchaDialogVisible}
                setIsCaptchaDialogVisible={setIsCaptchaDialogVisible}
                setIsCaptchaSolved={setIsCaptchaSolved}
            />
        </>
    );
};

export default AuthForm;
