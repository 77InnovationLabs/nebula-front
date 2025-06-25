export default function Rewards() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rewards</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Token Balance</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1">1500</div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Claimable Rewards</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1">500</div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly Ranking</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1">#32</div>
                </div>
            </div>
        </div>
    )
}