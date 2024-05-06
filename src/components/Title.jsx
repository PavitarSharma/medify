const Title = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {subTitle && (
        <p className="text-primary font-semibold text-center ">{subTitle}</p>
      )}
      <h2 className="text-center font-semibold lg:text-5xl md:text-4xl text-3xl text-[#1B3C74]">
        {title}
      </h2>
    </div>
  );
};

export default Title;
