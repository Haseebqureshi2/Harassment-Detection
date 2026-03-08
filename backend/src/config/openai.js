import OpenAI from "openai";
// src/config/openai.js
import dotenv from "dotenv";
dotenv.config();
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
