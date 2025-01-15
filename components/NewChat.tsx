/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client"
import db from "@/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { PlusIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

function NewChat() {
    const router = useRouter()

    const createNewChat = async () => {
        const doc = await addDoc(collection(db, 'chats'), {
            createdAt: serverTimestamp()
        })

        router.push(`/chat/${doc.id}`)
    }

    return (
        <div onClick={ () => createNewChat() } className="border-gray-700 border rounded-lg px-5 py-3 text-sm flex item justify-center space-x-2 hover:bg-gray-500/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out" >
            <PlusIcon className="h-4 w-4" />
            <p>New Chat</p>
        </div>
    )
}
export default NewChat