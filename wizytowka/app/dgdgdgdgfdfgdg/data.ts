import path from "path";
import fs from "fs/promises";

export const pricingFields = [
  { key: "StrzyzenieSebastian", label: "Strzyżenie Sebastian" },
  { key: "StrzyzenieOskar", label: "Strzyżenie Oskar" },
  { key: "StrzyzenieKarol", label: "Strzyżenie Karol" },
  { key: "StrzyzenieDzieciSebastian", label: "Strzyżenie Dzieci Sebastian" },
  { key: "StrzyzenieDzieciOskar", label: "Strzyżenie Dzieci Oskar" },
  { key: "StrzyzenieDzieciKarol", label: "Strzyżenie Dzieci Karol" },
  { key: "ComboSebastian", label: "Combo Sebastian" },
  { key: "ComboOskar", label: "Combo Oskar" },
  { key: "ComboKarol", label: "Combo Karol" },
  { key: "StrzyzenieBrodySebastian", label: "Strzyżenie Brody Sebastian" },
  { key: "StrzyzenieBrodyOskar", label: "Strzyżenie Brody Oskar" },
  { key: "StrzyzenieBrodyKarol", label: "Strzyżenie Brody Karol" },
  { key: "SiwiznaWlosy", label: "Siwizna Włosy" },
  { key: "SiwiznaBrody", label: "Siwizna Brody" },
  { key: "SiwiznaOba", label: "Siwizna Oba" },
  { key: "DepilacjaUszy", label: "Depilacja Uszy" },
  { key: "DepilacjaNos", label: "Depilacja Nos" },
  { key: "DepilacjaOba", label: "Depilacja Oba" },
];

export async function getData() {
  const filePath = path.join(process.cwd(), "data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file) as Record<string, string>;
}