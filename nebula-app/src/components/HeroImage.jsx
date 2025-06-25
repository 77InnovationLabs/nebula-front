import { Shield } from 'lucide-react';

export default function HeroImage() {
    return (
        <div className="bg-white">
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12 flex items-center justify-center min-h-96">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center">
                                <Shield className="w-12 h-12 text-indigo-600" />
                            </div>
                            <p className="text-gray-600">Interactive Learning Platform Preview</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}