import Link from "next/link";

export default function ArticleCard(
    {
        title,
        field,
        platform,
        date,
        link
    }: {
        title: string,
        field: string,
        platform: string,
        date: string,
        link: string
    }) {
    return (
        <Link
            href={link}
            target="_blank"
            className="w-full flex items-center justify-between gap-4 px-2 py-4 cursor-pointer hover:bg-white/5 transition-colors rounded-lg">
            <div className="w-max ">
                <h3 className="text- font-medium w-full">{title}</h3>
                <div className="flex items-center justify- gap-2 text-sm text-gray-400">
                    <span className="text-sm text-gray-400">{field}</span>
                    <div className="size-1 bg-white/50 rounded-full" />

                    <span className="text-sm text-gray-400">{platform}</span>
                    <div className="size-1 bg-white/50 rounded-full" />

                    <span className="text-sm text-gray-400">{date}</span>

                </div>
            </div>

        </Link>
    );
}
