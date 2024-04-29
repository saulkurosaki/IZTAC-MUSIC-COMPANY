import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import FolderImg from "@/assets/folder_img.svg";

type BlogCardProps = {
  author: string;
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
  achievement: string;
  url: string;
};

const BlogCard = ({
  author,
  title,
  description,
  date,
  image,
  achievement,
  url,
}: BlogCardProps) => {
  return (
    <div className="w-[440px] h-[378px] px-[15px] pb-6">
      <article className="w-full h-full">
        <Link href={url} className="relative">
          <Image
            src={image}
            alt="post_image"
            className="w-full h-[175px] object-cover z-0 rounded-md"
          />
          <div
            className="w-full h-10 p-2 pt-4 flex items-center absolute inset-0 top-[135px] z-10 rounded-md text-[#ededed] oxygen"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(255, 255, 255, 0))`,
            }}
          >
            {author}
          </div>
        </Link>

        <div className="w-full mt-4">
          {/* <h2 className="text-xl text-[#4a4a4a] oxygen mb-2">{title}</h2> */}
          {/* <p className="text-sm text-[#5c5c5c] oxygen">{description}</p> */}
        </div>

        {/* <div className="w-full h-[17px] flex justify-between">
          <p className="w-[85px] h-full px-auto text-sm text-[#4f4f4f] font-bold oxygen">
            {date}
          </p>
          <div
            className={`${
              achievement === "goals" ? "w-[133px]" : "w-[136px]"
            } h-full px-2 flex`}
          >
            <Image
              src={FolderImg}
              alt="folder_svg"
              width={14}
              height={14}
              className="mr-1 pb-[1px] opacity-65"
            />
            <Link
              href={
                achievement === "goals"
                  ? "/metas-cumplidas"
                  : "/reconocimientos"
              }
            >
              <p className="text-xs text-[#aa854a] font-bold">
                {achievement === "goals"
                  ? "Metas cumplidas"
                  : "Reconocimientos"}
              </p>
            </Link>
          </div>
        </div> */}
      </article>
    </div>
  );
};

export default BlogCard;
