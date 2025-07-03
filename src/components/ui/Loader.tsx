"use client";

import "@/styles/loaderstyle.css"

export default function Loader({loading}: {loading: boolean}){
    if(loading)
        return(
            <div className="loader fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/60 z-50">
                <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
        )
}