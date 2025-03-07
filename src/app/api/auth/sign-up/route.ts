import { NextResponse } from "next/server";

import CONFIGURATIONS from "@/constants/configurations";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        const response = await fetch(
            `${CONFIGURATIONS.BACKEND_URL}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.message },
                { status: response.status }
            );
        }

        return NextResponse.json(
            {
                status: response.status,
                message: "Sign up successful",
            },
            { status: response.status }
        );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        } else {
            return NextResponse.json(
                { error: "An unknown error occurred" },
                { status: 400 }
            );
        }
    }
}
