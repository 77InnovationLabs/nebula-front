import { Shield, Code, Users, ArrowRight } from 'lucide-react';

export default function Validation() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
                        Streamlined Validation: Certifying Skills in the Web3 Educational Landscape
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Shield className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Empowering Students Through On-Chain Certification and Reward Systems
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Our platform validates student skills through automated testing tools and on-chain certificates.
                            </p>
                            <button className="text-indigo-600 hover:text-indigo-700 flex items-center mx-auto">
                                Learn <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Code className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                How We Ensure Accurate Skill Validation and Certification
                            </h3>
                            <p className="text-gray-600 mb-6">
                                We utilize a robust framework to verify coding tasks and issue certificates.
                            </p>
                            <button className="text-indigo-600 hover:text-indigo-700 flex items-center mx-auto">
                                Explore <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <Users className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Join Our Community of Innovators in Decentralized Education
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Become part of a transformative movement in educational validation and rewards.
                            </p>
                            <button className="text-indigo-600 hover:text-indigo-700 flex items-center mx-auto">
                                Get Started <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}