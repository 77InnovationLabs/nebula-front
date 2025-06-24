export default function CTA() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Unlock Your Educational Potential
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join us in revolutionizing educational validation with our cutting-edge Web3 solutions for educators.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all">
                            Integrate
                        </button>
                        <button className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all">
                            Book
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}