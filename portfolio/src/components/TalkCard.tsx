export default function TalkCard() {
    return (
        <div className="w-full flex items-center justify-between gap-4 px-2 py-4 cursor-pointer hover:bg-white/5 transition-colors rounded-lg">
                <div className="w-max ">
                    <h3 className="text- font-medium w-full">Off the main thread with vuex worker modules</h3>
                    <div className="flex items-center justify- gap-2 text-sm text-gray-400">
                        <span className="text-sm text-gray-400">VueBLR</span>
                        <div className="size-1 bg-white/50 rounded-full" />

                        <span className="text-sm text-gray-400">Remote</span>
                        <div className="size-1 bg-white/50 rounded-full" />

                        <span className="text-sm text-gray-400">24 April 2021</span>

                    </div>
            </div>

        </div>
    );
}
