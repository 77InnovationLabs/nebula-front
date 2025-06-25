import { Award, BookOpen } from 'lucide-react';

export default function Courses() {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>

            <div className="space-y-6">
                {/* In Progress Course */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center mb-2">
                                <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded">
                                    In progress
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Contract Development</h3>
                            <p className="text-gray-600 mb-4">Learn to build and deploy smart contracts on the blockchain.</p>
                            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                Continue
                            </button>
                        </div>
                        <div className="ml-6 w-48 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-8 h-8 text-amber-700" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Completed Course */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center mb-2">
                                <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                                    Completed
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Decentralized Finance (DeFi) Fundamentals</h3>
                            <p className="text-gray-600 mb-4">Understand the core concepts of DeFi and its applications.</p>
                            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                                View Certificate
                            </button>
                        </div>
                        <div className="ml-6 w-48 h-32 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl flex items-center justify-center">
                                <Award className="w-8 h-8 text-orange-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}