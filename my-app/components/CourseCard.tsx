import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, duration }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} width={300} height={200} className="w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{duration}</span>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

