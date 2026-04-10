import React from 'react';
import { MessageCircle } from 'lucide-react';

const CallButton: React.FC = () => {
    return (
        <a
            href="https://m.me/983183728215861"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white hover:scale-110"
            aria-label="Chat on Messenger"
        >
            <div className="relative">
                <MessageCircle className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
            </div>
        </a>
    );
};

export default CallButton;
