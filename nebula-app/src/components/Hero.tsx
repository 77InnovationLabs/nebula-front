
export default function Hero() {
    return (
        <div className="min-h-screen bg-white">
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Empower Learning with On-Chain Certification Solutions
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Transform your educational offerings with our innovative platform that validates student skills 
                        through decentralized technology. Leverage seamless integration and enhance your credibility 
                        with on-chain certificates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105">
                        Integrate
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all">
                        Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}