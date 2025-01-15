/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";
import MessageBot from "./MessageBot";

type Props = {
    message: DocumentData
}

function Message({ message }: Props) {
    const isUser = message.user._id === "user"


    return (
        <div className={ `py-5 text-white ${!isUser && "bg-[#434654]"}` }>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <img src={ message.user.avatar } alt="" className="h-8 w-8" />
                { isUser ? (
                    <p className="text-sm pt-1">{ message.text }</p>

                ) : (
                    <MessageBot message={ message } />
                ) }
            </div>
        </div>
    );
}
export default Message;
