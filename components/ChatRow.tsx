"use client"
import db from "@/firebase"
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"

type Props = {
    id: string
}
function ChatRow({ id }: Props) {
    const [ active, setActive ] = useState(false)
    const router = useRouter()
    const [ messages ] = useCollection(query(
        collection(db, 'chats', id, 'messages'), orderBy('createdAt', 'asc')
    ))

    const pathname = usePathname()

    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id))
    }, [ pathname ]);

    const deleteChat = async () => {
        // Delete the chat
        await deleteDoc(doc(db, 'chats', id))
        router.replace('/')
    }

    const nameOfChat = () => {
        if (messages?.docs[ messages?.docs.length - 1 ]?.data().user._id === "user") {
            return messages?.docs[ messages?.docs.length - 1 ]?.data()?.text
        } else {
            return "New Chat"
        }
    }

    return (
        <Link href={ `/chat/${id}` } className={ `${active && 'bg-gray-700/50'} rounded-lg px-5 py-3 text-sm flex item justify-center space-x-2 hover:bg-gray-500/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out` }>
            <ChatBubbleLeftIcon className="h-5 w-5 " />
            <p className="flex-1 hidden md:inline-flex truncate">
                { nameOfChat() }
            </p>
            <TrashIcon onClick={ () => deleteChat() } className="h-5 w-5 text-gray-700 hover:text-red-700 transition-all duration-200 ease-in" />
        </Link>
    )
}
export default ChatRow