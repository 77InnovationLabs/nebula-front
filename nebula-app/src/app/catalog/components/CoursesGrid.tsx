import CourseCard from "./CourseCard";

export default function CoursesGrid({ courses, getThumbnailContent }) {
  // Handle case where courses is not an array or is undefined
  if (!courses || !Array.isArray(courses)) {
    return (
      <div className="space-y-8">
        <p className="text-gray-500">No courses available.</p>
      </div>
    );
  }

  // Handle empty array
  if (courses.length === 0) {
    return (
      <div className="space-y-8">
        <p className="text-gray-500">No courses found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          getThumbnailContent={getThumbnailContent}
        />
      ))}
    </div>
  );
}