export default function WorkCard({
    company,
    role,
    startDate,
    endDate
}: {
    company: string,
    role: string,
    startDate: string,
    endDate: string
}) {
    return (
        <div className="w-full flex items-center justify-between gap-4 px-2 py-4 cursor-pointer rounded-lg">
            <div className="flex items-center justify-center gap-4 ">
                <div className="w-max">
                    <h3 className="text- font-medium">{company}</h3>
                    <p className="text-sm text-gray-400">{role}</p>
                </div>
            </div>
            <hr className="border-white/10 border-dotted w-full" />
            <div className="w-max">
                <p className="min-w-max">{startDate} - <br className="lg:hidden" /> {endDate}</p>
            </div>
        </div>
    );
}
