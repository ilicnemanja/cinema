import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { createSession } from "./lib/session";

const baseUrl = process.env.BACKEND_URL;

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async jwt({ token, account }) {
            if (account && account.access_token) {
                if (account.provider === "google") {
                    const response = await fetch(`${baseUrl}/api/auth/google`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ idToken: account.id_token }),
                    }).then((res) => res.json());

                    if (response.accessToken) {
                        await createSession(response.accessToken);
                    }
                }
            }
            return token;
        },
    },
});
