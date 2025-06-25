"use client";

import { ChevronDown } from 'lucide-react';

export default function Filters({ topicFilter, levelFilter, onTopicChange, onLevelChange }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative">
                <button className="flex items-center justify-between w-full sm:w-48 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-gray-700">{topicFilter}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
            </div>
            <div className="relative">
                <button className="flex items-center justify-between w-full sm:w-48 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-gray-700">{levelFilter}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
            </div>
        </div>
    )
}