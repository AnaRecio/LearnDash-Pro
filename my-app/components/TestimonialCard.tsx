interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">"{content}"</p>
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  )
}

export default TestimonialCard

