"use server";

import { redirect } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import { authenticate } from "../services/hashservice";
import { pricingFields } from "./data";

async function saveData(data: Record<string, string>, password: string) {
  console.log("Hash z env:", process.env.ADMIN_PASSWORD_HASH);
  const isValid = await authenticate(password);
  console.log("Wynik:", isValid);

  if (!isValid) {
    console.error("Nieprawidłowe hasło. Zmiany nie zostały zapisane.");
    redirect("/admin");
  }

  const filePath = path.join(process.cwd(), "data.json");
  console.error("Zapisuję do:", filePath);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  redirect("/admin");
}

export async function handleSave(formData: FormData) {
  const incoming: Record<string, string> = {};
  pricingFields.forEach((field) => {
    incoming[field.key] = formData.get(field.key)?.toString() || "";
  });
  const password = formData.get("password")?.toString() || "";
  await saveData(incoming, password);
}