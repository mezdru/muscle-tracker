import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
import prisma from "../../lib/prisma";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_PROVIDER_ID,
      clientSecret: process.env.GOOGLE_PROVIDER_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_PROVIDER_ID,
    //   clientSecret: process.env.APPLE_PROVIDER_SECRET,
    // }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};
