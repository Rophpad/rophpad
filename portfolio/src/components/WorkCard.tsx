export default function WorkCard() {
    return (
        <div className="w-full flex items-center justify-between gap-4 px-2 py-4 cursor-pointer rounded-lg">
            <div className="flex items-center justify-center gap-4 ">
                <div className="w-max">
                    <h3 className="text- font-medium">AEIG</h3>
                    <p className="text-sm text-gray-400">FullStack dev</p>
                </div>
            </div>
            <hr className="border-white/10 border-dotted w-full" />
            <div className="w-max">
                <p className="min-w-max">Jan 2023 - <br className="lg:hidden" /> Present</p>
            </div>
        </div>
    );
}
