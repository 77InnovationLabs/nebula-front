"use client"

import { useState } from "react";

export default function Nav() {
    const [activeTab, setActiveTab] = useState('courses');

    return (
        <div className="flex space-x-1 mb-8">
            <button
                onClick={() => setActiveTab('courses')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'courses'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
            >
                Courses
            </button>
            <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'certifications'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
            >
                Certifications
            </button>
            <button
                onClick={() => setActiveTab('activity')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'activity'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
            >
                Activity
            </button>
        </div>
    )
}