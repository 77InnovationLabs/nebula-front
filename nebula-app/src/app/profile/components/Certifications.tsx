import { Award } from 'lucide-react';

export default function Certifications() {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Certifications</h2>

            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Contract Development Certification</h3>
                        <p className="text-gray-600 mb-4">Issued on: 2024-05-15</p>
                        <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            View Certificate
                        </button>
                    </div>
                    <div className="ml-6 w-48 h-32 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-xl flex items-center justify-center">
                            <Award className="w-8 h-8 text-amber-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}