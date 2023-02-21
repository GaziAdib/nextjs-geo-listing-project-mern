import db from "@/lib/db";
import User from "@/models/User";
import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default nextAuth({
    // session: {
    //     strategy: "jwt",

    // },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile, user }) {
            if (account.provider === "google") {
                await db.dbConnect();

                user.googleId = account.providerAccountId;

                const checking = await User.findOne({
                    googleId: user.googleId,
                });

                const totalUser = await User.countDocuments();

                if (!checking) {
                    if (totalUser === 0) {
                        await User.create({
                            name: user.name,
                            email: user.email,
                            avatar: user.image,
                            googleId: user.googleId,
                            role: "admin",
                        });
                    } else {
                        await User.create({
                            name: user.name,
                            email: user.email,
                            avatar: user.image,
                            googleId: user.googleId,
                        });
                    }
                }

                return (
                    profile.email_verified &&
                    profile.email.endsWith("@gmail.com")
                );
            }

            return true; // Do different verification for other providers that don't have `email_verified`
        },
    },
});
