interface CardHeadingProps {
  title: string;
}

export const CardHeading = ({ title }: CardHeadingProps) => {
  return (
    <div className="flex items-center gap-[14px]">
      <div className="w-[8px] h-[24px] bg-buttonColor"/>
      <h4 className="lg:text-xl font-semibold leading-[32px] text-textBlackColor md:text-sm max-sm:text-sm">{title}</h4>
    </div>
  )
}