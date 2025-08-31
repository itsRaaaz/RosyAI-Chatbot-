const api = "AIzaSyDiIDnwffgOQjBmXprtey9jR6MZ-VQjVrc";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 30,
  // responseMimetype: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });
  const result = await chatSession.sendMessage(prompt);
//   console.log(result.response.text());
   return result.response.text();
}

export default run;
