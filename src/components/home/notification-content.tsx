import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData | string;
  title: string;
  time: string;
  className?: string;
  width: number;
  height: number;
};

export const NotificationContent = ({  image, title, time, className, width, height }: Props) => {
  return (
    <div className="flex items-center gap-2.5 hover:bg-[#f3f8fe] p-2">
      <div className={className}>
        <Image
          src={image}
          alt="image"
          width={width}
          height={height}
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xxs font-normal text-[#9A9FA5]">{time}</span>
      </div>
    </div>
  )
}
