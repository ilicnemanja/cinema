"use server";

import "server-only";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

import CONFIGURATIONS from "@/constants/configurations";

const secretKey = CONFIGURATIONS.JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

interface JWTPayload {
    sub: string;
    exp: number;
    name: string;
    email: string;
    role: string;
    provider: string;
    photoUrl: string;
}

export async function decrypt(
    jwt: string | undefined = ""
): Promise<JWTPayload | null> {
    try {
        const { payload } = await jwtVerify(jwt, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload as unknown as JWTPayload;
    } catch {
        return null;
    }
}

export async function deleteSession(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}

export async function createSession(accessToken: string): Promise<void> {
    const cookieStore = await cookies();
    const expiresAt = new Date(Date.now() + 60 * 1000); // 60s TODO: Set to 7d after testing
    const session = await jwtVerify(accessToken, encodedKey, {
        algorithms: ["HS256"],
    });

    if (!session) {
        return;
    }

    cookieStore.set("session", accessToken, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "none",
        path: "/",
    });
}

export async function getSession(): Promise<JWTPayload | null> {
    try {
        const cookieStore = await cookies();
        const session = await decrypt(cookieStore.get("session")?.value);

        if (!session) {
            return null;
        }

        return session;
    } catch {
        return null;
    }
}
