/* eslint-disable @typescript-eslint/no-explicit-any */
function MessageBot({ message }: any) {
    return (
        <div className="space-y-5">
            { message.text.map((section: any, i: any) => (
                <div key={ i } className="text-sm space-y-2 pt-1 pl-1">

                    { section.topic && (
                        <h1 className="font-semibold uppercase tracking-widest">{ section.topic }</h1>
                    ) }
                    <ul style={ { listStyleType: "none" } }>
                        { section.details.map((pc: string, i: number) => (
                            <li key={ i }>
                                { pc }
                            </li>
                        )) }
                    </ul>

                </div>
            )) }
        </div>
    );
}
export default MessageBot;
