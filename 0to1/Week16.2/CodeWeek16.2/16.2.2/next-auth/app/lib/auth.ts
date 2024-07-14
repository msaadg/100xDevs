// import { NextRequest, NextResponse } from "next/server";

// export function GET(req: NextRequest, { params : { nextauth } } : {
//     params: {
//         nextauth: string[]
//     }
// }) {
//     console.log(nextauth);
//     return NextResponse.json({
//         message: "hello"
//     })
// }

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                const username = credentials.username;
                const password = credentials.password;
                // prisma.user.findOne({
                //     where: {
                //         username: username,
                //         password: password
                //     }
                // })

                return {
                    id: "user1",
                    email: "msaad",
                    name: "Muhammad Saad",
                };
            },
            
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({ user, token } : any) => {
            token.userId = token.sub;
            return token;
        },
        session: ({ session, token, user } : any) => {
            if (session.user) {
                session.user.id = token.userId;
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin",
    }
}