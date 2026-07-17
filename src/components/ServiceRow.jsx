function ServiceRow({ service }) {
  return (
    <a
      className="group grid min-h-[142px] grid-cols-[1fr_36px] items-center gap-x-4 gap-y-3 border-b border-[#c7c7c7] py-5 sm:min-h-[132px] sm:grid-cols-[140px_minmax(0,1fr)_40px] sm:gap-4 md:grid-cols-[170px_minmax(0,1fr)_40px] md:gap-[18px] md:py-[22px] lg:h-[132px] lg:min-h-0 lg:grid-cols-[300px_minmax(0,1fr)_62px] lg:gap-0 lg:py-0 lg:max-[1200px]:grid-cols-[240px_minmax(0,1fr)_50px]"
      href="#contact"
    >
      <p className="col-start-1 whitespace-pre-line text-[11px] leading-[1.4] sm:text-xs md:text-[13px] lg:text-[20px]">
        {service.category}
      </p>
      <h3 className="relative z-2 col-span-full row-start-2 font-gerbil text-[30px] leading-[1.05] font-normal tracking-[-0.035em] tracking-wide transition-transform duration-[180ms] group-hover:translate-x-2 group-focus-visible:translate-x-2 sm:col-auto sm:row-auto sm:text-[18.8px] md:text-[23.8px]  lg:text-[35px] xl:text-[42px] lg:leading-none ">
        {/* md:text-[clamp(34px,4.4vw,42px)]  */}
        {service.title}
        {service.decorated && (
          <img
            className="absolute top-1/2 left-[55%] z-[-1] size-16 -translate-y-1/2
             sm:size-[76px] md:size-[88px] lg:size-[104px]
             animate-[spin_15s_linear_infinite]"
            src="/progres-img.png"
            alt=""
          />
        )}
      </h3>
      <span
        className="relative col-start-2 row-start-1 block h-px w-9 justify-self-end bg-ink transition-transform duration-[180ms] after:absolute after:-top-1 after:right-0 after:size-2 after:rotate-45 after:border-t after:border-r after:border-ink after:content-[''] group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 sm:col-auto sm:row-auto sm:w-10 md:w-[38px] lg:w-[60px]"
        aria-hidden="true"
      />
    </a>
  );
}

export default ServiceRow;
