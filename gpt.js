import 'dotenv/config';
import OpenAI from "openai";

const openai = new OpenAI({
  organization: 'org-5ZJbsjfUiniTbgfWq4PSRX7J'
});

async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  }
  
  main();

  async function listAssistants() {
    const myAssistants = await openai.beta.assistants.list({
      order: "desc",
      limit: "20",
    });
  
    console.log(myAssistants.data);
  }
  
  listAssistants();