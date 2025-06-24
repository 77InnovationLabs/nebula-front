import { Code, Award, Users, ArrowRight } from 'lucide-react';

export default function Empower() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-indigo-600 font-semibold mb-4">EMPOWER</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                        Unlock the Future of Learning Validation
                    </h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                        Our platform revolutionizes educational validation with seamless Web3 integration. Experience
                        automated verification and on-chain certification like never before.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Users className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Cross-Platform Web3 Profiles for Every Student
                            </h3>
                            <p className="text-gray-600">
                                Students maintain a dynamic profile showcasing validated achievements.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Code className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Automatic Verification of Coding Tasks Simplified
                            </h3>
                            <p className="text-gray-600">
                                Integrations can effortlessly validate tasks on testnet.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Award className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                On-Chain Certificates for Verified Skills
                            </h3>
                            <p className="text-gray-600">
                                Issue certificates that are secure and verifiable.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all">
                            Integrate
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center">
                            Learn <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}