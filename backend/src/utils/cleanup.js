import fs from "fs/promises";

export async function safeDelete(filePath) {
  if (!filePath) return;

  try {
    await fs.rm(filePath, { force: true });
  } catch (err) {
    console.warn("Cleanup failed:", filePath);
  }
}