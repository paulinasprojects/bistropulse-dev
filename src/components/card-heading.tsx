interface CardHeadingProps {
  title: string;
}

export const CardHeading = ({ title }: CardHeadingProps) => {
  return (
    <div className="flex items-center gap-[14px]">
      <div className="w-[8px] h-[24px] bg-[#2A85FF]"/>
      <h4 className="text-xl font-semibold leading-[32px] text-[#1A1D1F]">{title}</h4>
    </div>
  )
}