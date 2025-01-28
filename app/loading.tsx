import React from "react";

const Loading = () => {
    return (
        <div
            id="loading"
            className="fixed inset-0 bg-gray-100 z-50 flex justify-center items-center"
        >
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;