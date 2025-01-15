/* eslint-disable @typescript-eslint/no-explicit-any */
import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"




async function ChatPage({ params }: { params: any }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {/* chat */ }
            <Chat chatId={ params.id } />
            {/* Input Section */ }
            <ChatInput chatId={ params.id } />
        </div>
    )
}
export default ChatPage