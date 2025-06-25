export default function User() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 p-1 mb-6">
                    <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face"
                        alt="Sophia Bennett"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Sophia Bennett</h1>
                <p className="text-gray-600 mb-2">sophia.bennett@email.com</p>
                <p className="text-gray-500">Joined 2 months ago</p>
            </div>
        </div>
    )
}