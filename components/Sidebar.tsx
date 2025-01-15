/* eslint-disable @next/next/no-img-element */
"use client"
import { useCollection } from "react-firebase-hooks/firestore"
import NewChat from "./NewChat"
import { collection, orderBy, query } from "firebase/firestore"
import db from "@/firebase"
import ChatRow from "./ChatRow"

const Sidebar = () => {

    const [ chats ] = useCollection(

        query(
            collection(db, 'chats'),
            orderBy('createdAt', 'asc')
        )

    )

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div className="space-y-2">
                    {/* New Chat */ }
                    <NewChat />


                    {/* Map through the chat items */ }
                    { chats?.docs.map((chat) => (
                        <ChatRow key={ chat.id } id={ chat.id } />
                    )) }
                </div>
            </div>


        </div>
    )
}
export default Sidebar