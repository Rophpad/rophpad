import React from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

export default function FigmaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex flex-row w-full h-full">
                <LeftSideBar />
                {children}
                <RightSideBar />
            </div>
        </>

    );
}