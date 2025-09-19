export default function FigmaSection({ name, children }: { name: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="bg-white/5  w-max px-3 py-2 rounded-lg text-xs flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="size-4">
                    <path fill="currentColor" d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l4.6-4.6q.3-.3.713-.3t.712.3t.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313t-.3-.712t.3-.713z" />
                </svg>
                <span>{name}</span>
            </div>
            <div className="bg-white/5 w-full h- flex flex-col items-center gap-8  rounded p-8">
                {children}
            </div>
        </div>
    );
}