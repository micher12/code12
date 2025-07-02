"use server";

import { createHash } from "crypto";
import jwt from "jsonwebtoken";

export default async function getToken(){

    const encoded = createHash("sha256").update(process.env.BEARER_KEY as string).digest("base64");

    const payload = {pupose: "sended", key: encoded};

    const token = jwt.sign(payload, process.env.JWT_TOKEN as string, {expiresIn: "10s"});

    return token;
}