// pages/api/generateContent.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import { response } from "next-lesscode/functions";

const handler = async (req, res) => {
  const { type, name, position, company } = req.body
  // const {type,name,position}=req.body;

  // const name="Rahul Shukhwal"
  // const position="Flutter Developer"

  const genAI = new GoogleGenerativeAI(process.env.GIMMI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  try {

    if (type === 'JobReferal') {
      // Generate a msg for laxmi naryan at company philio for request referal for react developer
      let prompt = `My name is Vipul Jangid, with over a year of experience in React, Node.js, and Express.js. I am reaching out to request your consideration for the ${position} position at your esteemed company. The referring employee is ${name}, currently working at ${company}. I appreciate your time and consideration. Thank you.`;

      let result = await model.generateContent(prompt);
      let response1 = await result.response;
      let text = await response1.text();
      response(res, 200, text);
      return;
    }
    if (type === 'CausalConnection') {
      response(res, 200, `Hello ${name}, I noticed your role as a ${position} Developer and was intrigued by your expertise. I'd love to connect and discuss our mutual interests and experiences in the industry.`);
      return
    }
    if (type === 'CoverLetter') {
      response(res, 200, `Hello ${name}, I noticed your role as a ${position} Developer and was intrigued by your expertise. I'd love to connect and discuss our mutual interests and experiences in the industry.`);
      return
    }




    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    const response1 = await result.response;
    const text = await response1.text();

    console.log(text);

    res.status(200).json({ text });
    response(res, 200)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
    response(res, 500, "Internal Server Error")
  }
}

export default handler;
