import CourseCard from '../components/CourseCard'

const courses = [
  {
    title: "Digital Marketing Basics",
    description: "Learn the fundamentals of digital marketing and boost your online presence.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "4 weeks",
  },
  {
    title: "Introduction to Python",
    description: "Start your coding journey with Python, one of the most popular programming languages.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "6 weeks",
  },
  {
    title: "Time Management Hacks",
    description: "Discover practical techniques to boost your productivity and manage your time effectively.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "3 weeks",
  },
  {
    title: "Data Analysis with Excel",
    description: "Master essential Excel skills for data analysis and visualization.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "5 weeks",
  },
  {
    title: "Effective Communication Skills",
    description: "Enhance your verbal and written communication skills for personal and professional success.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "4 weeks",
  },
  {
    title: "UX/UI Design Principles",
    description: "Learn the fundamentals of user experience and user interface design.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "6 weeks",
  },
]

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  )
}

