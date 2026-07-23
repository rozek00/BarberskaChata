// scripts/hash-password.ts
import bcrypt from "bcrypt";

const password = process.argv[2];

bcrypt.hash(password, 10).then((hash) => {
  console.log(hash);
});