import React from 'react'
import CourseCard from '../components/CourseCard'

const courses = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Basics",
    description: "Master the fundamentals of digital marketing, including SEO, social media, and content strategy.",
    imageUrl: "/images/courses/digital-marketing.jpg",
    price: 19.99,
    duration: "4 weeks",
    level: "Beginner",
    topics: ["SEO", "Social Media", "Content Marketing", "Analytics"]
  },
  {
    id: "python-intro",
    title: "Introduction to Python",
    description: "Learn Python programming from scratch with hands-on projects and real-world applications.",
    imageUrl: "/images/courses/python.jpg",
    price: 19.99,
    duration: "6 weeks",
    level: "Beginner",
    topics: ["Basic Syntax", "Data Structures", "Functions", "OOP"]
  },
  {
    id: "time-management",
    title: "Time Management Hacks",
    description: "Boost your productivity with proven time management techniques and tools.",
    imageUrl: "/images/courses/time-management.jpg",
    price: 19.99,
    duration: "3 weeks",
    level: "All Levels",
    topics: ["Priority Setting", "Planning", "Productivity Tools", "Habits"]
  },
  {
    id: "data-analysis",
    title: "Data Analysis with Excel",
    description: "Master Excel for data analysis, including formulas, pivot tables, and visualization.",
    imageUrl: "/images/courses/excel.jpg",
    price: 19.99,
    duration: "5 weeks",
    level: "Intermediate",
    topics: ["Formulas", "Pivot Tables", "Charts", "Data Cleaning"]
  },
  {
    id: "communication",
    title: "Effective Communication Skills",
    description: "Develop strong communication skills for professional success.",
    imageUrl: "/images/courses/communication.jpg",
    price: 19.99,
    duration: "4 weeks",
    level: "All Levels",
    topics: ["Verbal", "Written", "Body Language", "Presentations"]
  },
  {
    id: "ux-design",
    title: "UX/UI Design Principles",
    description: "Learn the fundamentals of user experience and interface design.",
    imageUrl: "/images/courses/ux-design.jpg",
    price: 19.99,
    duration: "6 weeks",
    level: "Beginner",
    topics: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  }
]

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-600">Start your learning journey today with our expert-led courses</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 