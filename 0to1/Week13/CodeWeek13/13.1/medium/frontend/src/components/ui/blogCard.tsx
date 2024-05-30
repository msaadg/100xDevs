import { Link } from "react-router-dom";
import { Avatar } from "./avatar";

interface blogCardProps {
  firstName: string;
  lastName: string;
  date: string;
  heading: string;
  content: string;
  id: string;
}

export const BlogCard = ({firstName, lastName, date, heading, content, id}: blogCardProps) => {
  return <Link to={`/blog/${id}`}>
    <div className="mt-10 border-b-2 cursor-pointer">
      <div className="flex mt-2">
        <Avatar size="small"/>
        <div className="ml-2 left-[166px] font-lexend text-[14px] leading-[32px] font-light text-gray-600">
          {firstName} {lastName.length > 0 ? lastName[0] + "." : ""} - {date}
        </div>
      </div>
      <div className="ml-2 font-lexend">
        <div className="text-[31px] leading-[46px] font-bold text-neutral-900">
          {heading}
        </div>
        <div className="text-[24px] leading-[36px] font-light text-gray-500">
          {content.length > 100 ? content.slice(0, 100) + ".." : content}.
        </div>
      </div>
      <div className="ml-2 mt-3 mb-10">
        <div className="text-gray-400">
          {String(Math.floor(content.length/200))} min read
        </div>
      </div>
    </div>
  </Link>
}