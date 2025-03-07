import { NextResponse } from "next/server";

import CONFIGURATIONS from "@/constants/configurations";
import { createSession } from "@/lib/session";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const response = await fetch(
            `${CONFIGURATIONS.BACKEND_URL}/api/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.message },
                { status: response.status }
            );
        }

        await createSession(data.accessToken);

        return NextResponse.json({ data });
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
