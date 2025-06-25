export default function CourseCard({ course, getThumbnailContent }) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                        Enroll Now
                    </button>
                </div>
                <div className="lg:w-1/3 p-8">
                    <div className="w-full h-48 lg:h-full min-h-48">
                        {getThumbnailContent(course.thumbnail, course.icon, course.gradient)}
                    </div>
                </div>
            </div>
        </div>
    )
}