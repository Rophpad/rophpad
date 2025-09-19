export default function Element({
    name,
    isClickable,
    children,
}: {
    name?: string;
    isClickable: boolean;
    children: React.ReactNode;
}) {
    return (
        <div id={name} className={`w-full text- rounded  flex items-center justify-between ${isClickable ? "cursor-pointer hover:bg-white/5 transition-colors" : ""}`}>
            {children}
        </div>
    );
}
