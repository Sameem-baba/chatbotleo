/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import db from "@/firebase"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"


function ChatInput({ chatId }: { chatId: string }) {
    const [ prompt, setPrompt ] = useState("")

    // use SWR to fetch the model
    // const model = "text-davinci-003"

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!prompt) return

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: "user",
                name: "You",
                avatar: `https://ui-avatars.com/api/?name=sameem`,
            }
        }

        await addDoc(collection(db, "chats", chatId, "messages"), message)

        //Toast Notification to say loading
        const notification = toast.loading("Bot is thinking...")
        // toast.loading("")

        await fetch("/api/askQuestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: input, chatId })
        }).then(() => toast.success("Bot has replied!", { id: notification }))



    }

    return (
        <div className="bg-gray-700/50 shadow-lg text-gray-400 mx-4 mb-4 rounded-lg text-sm  ">
            <form className="py-2 px-4 space-x-5 flex" onSubmit={ (e) => sendMessage(e) }>
                <input
                    className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                    value={ prompt }
                    onChange={ (e) => setPrompt(e.target.value) }
                    type="text"
                    placeholder="Type a message..."

                />
                <button
                    disabled={ !prompt }
                    type="submit"
                    className="bg-[#11A37F] transition-all duration-150 ease-in hover:opacity-50 p-3  disabled:cursor-not-allowed disabled:bg-gray-300 rounded-lg text-white font-bold"
                >
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>

            <div>
                {/* ModelSelection */ }
            </div>
        </div>
    )
}
export default ChatInput