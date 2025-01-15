import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { questionsAndAnswers } from "@/lib/queryApi";
import admin from "firebase-admin";
import { NextApiRequest, NextApiResponse } from "next";
import adminDb from "@/firebaseAdmin";
import stringSimilarity from "string-similarity";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { prompt, chatId }: { prompt: string; chatId: string } = await req.body;

	const promptsys = `You are an intelligent bot. Match the user query with the closest question from the following list and return the matched question only: ${questionsAndAnswers
		.map((item) => `${item.question}`)
		.join("\n")} User query: "${prompt}" Matched question: `;

	const { text } = await generateText({
		model: google("gemini-1.5-pro-latest"),
		messages: [
			{ role: "system", content: promptsys },
			{ role: "user", content: prompt },
		],
		// prompt: "Write a vegetarian lasagna recipe for 4 people.",
	});

	// console.log("text", text);

	const questions = questionsAndAnswers.map((item) => item.question);
	const match = stringSimilarity.findBestMatch(text, questions);

	// console.log("match", match.bestMatchIndex);

	const message = {
		text: questionsAndAnswers[match.bestMatchIndex].answers || [
			{
				topic: "Error",
				details: ["I'm sorry, I don't have an answer for that."],
			},
		],
		createdAt: admin.firestore.Timestamp.now(),
		user: {
			_id: "bot",
			name: "Bot",
			avatar: `https://ui-avatars.com/api/?name=bot`,
		},
	};

	// console.log(questionsAndAnswers[match.bestMatchIndex].answer);

	await adminDb
		.collection("chats")
		.doc(chatId)
		.collection("messages")
		.add(message);

	return res.status(200).json({ answer: "" });
}

// // type Data = {
// // 	name: string;
// // };

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {

// 	const { prompt, chatId } = req.body;
// 	if (!prompt) {
// 		res.status(400).json({ answer: "Please provide a prompt!" });
// 		return;
// 	}

// 	if (!chatId) {
// 		res.status(400).json({ answer: "Please provide a valid chat ID!" });
// 		return;
// 	}

// 	console.log("prompt", prompt);
// 	const response = await query(prompt);
// const message = {
// 	text:
// 		questionsAndAnswers
// 			.filter((q) => q.question === response)
// 			.map((q) => q) || "I'm sorry, I don't have an answer for that.",
// 	createdAt: admin.firestore.Timestamp.now(),
// 	user: {
// 		_id: "bot",
// 		name: "Bot",
// 		avatar: `https://ui-avatars.com/api/?name=bot`,
// 	},
// 	};

// 	// console.log(response);

// await adminDb
// 	.collection("chats")
// 	.doc(chatId)
// 	.collection("messages")
// 	.add(message);

// 	res.status(200).json({ answer: "" });
// }
