
export default function Trusted() {
    return (
        <div className="bg-white">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-600 mb-8">Trusted by top educational platforms worldwide</p>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-12 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-gray-500 font-semibold">Logo {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}