export default function MainContent({ connections, nodes }) {
    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Title */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About NebulaQuest</h1>
                </div>

                {/* Our Vision Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At ChainCertify, we envision a future where educational achievements are universally recognized and verifiable on the
                        blockchain. We believe in the power of decentralized technology to enhance trust and transparency in education,
                        providing learners with immutable proof of their skills and knowledge.
                    </p>
                </section>

                {/* Our Mission Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to empower educational institutions with the tools to validate student skills using smart contracts and issue
                        on-chain certificates. By leveraging blockchain technology, we aim to create a more secure, efficient, and transparent
                        system for educational validation.
                    </p>
                </section>

                {/* How On-Chain Validation Works Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How On-Chain Validation Works</h2>
                    <p className="text-gray-700 leading-relaxed">
                        ChainCertify utilizes smart contracts to validate student skills. When a student completes a course or assessment, their
                        results are processed and verified by a smart contract deployed on the blockchain. Upon successful validation, an on-chain
                        certificate is issued, providing an immutable record of their achievement.
                    </p>
                </section>

                {/* Chainlink Functions Integration Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Chainlink Functions Integration</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        We integrate Chainlink Functions to securely and reliably fetch external data required for smart contract validation. This
                        integration ensures that our smart contracts can access real-world data, such as assessment results from learning
                        management systems, in a decentralized and trustless manner.
                    </p>

                    {/* Network Visualization */}
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-8 mb-8">
                        <div className="flex justify-center">
                            <svg width="400" height="400" viewBox="0 0 400 400" className="max-w-full h-auto">
                                {/* Render connections */}
                                {connections && connections.map((connection, i) => (
                                    <line
                                        key={i}
                                        x1={connection.from.x}
                                        y1={connection.from.y}
                                        x2={connection.to.x}
                                        y2={connection.to.y}
                                        stroke="#d97706"
                                        strokeWidth="1"
                                        opacity="0.6"
                                    />
                                ))}

                                {/* Render nodes */}
                                {nodes && nodes.map((node) => (
                                    <circle
                                        key={node.id}
                                        cx={node.x}
                                        cy={node.y}
                                        r="6"
                                        fill="#92400e"
                                        className="animate-pulse"
                                        style={{
                                            animationDelay: `${Math.random() * 2}s`,
                                            animationDuration: `${2 + Math.random() * 2}s`
                                        }}
                                    />
                                ))}
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our team comprises experienced professionals in blockchain technology, education, and software development. We are
                        passionate about transforming education through innovative solutions and are committed to providing exceptional service
                        to our clients.
                    </p>
                </section>
            </main>
        </div>
    )
}