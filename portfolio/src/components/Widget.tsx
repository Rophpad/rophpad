import React from "react";

export default function Widget({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-[#212529] rounded-lg py-4">
            {children}
        </div>
    );
}