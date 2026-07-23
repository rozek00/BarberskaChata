import bcrypt from "bcrypt";

export async function authenticate(password: string) {
    return await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH || "");
}