function ServiceRow({ service }) {
  return (
    <a
      className="group grid h-[132px] grid-cols-[300px_minmax(0,1fr)_62px] items-center border-b border-[#c7c7c7] max-[1200px]:grid-cols-[240px_minmax(0,1fr)_50px] max-[900px]:h-auto max-[900px]:min-h-[150px] max-[900px]:grid-cols-[170px_minmax(0,1fr)_40px] max-[900px]:gap-[18px] max-[900px]:py-[22px] max-[600px]:min-h-[155px] max-[600px]:grid-cols-[1fr_36px]"
      href="#contact"
    >
      <p className="whitespace-pre-line text-[20px] leading-[1.4] max-[900px]:text-[13px] max-[600px]:col-start-1">
        {service.category}
      </p>
      <h3 className="relative z-2 font-gerbil text-[40px] leading-none font-normal tracking-[-0.035em] transition-transform duration-[180ms] group-hover:translate-x-2 group-focus-visible:translate-x-2 max-[1200px]:text-[42px] max-[900px]:text-[clamp(30px,5vw,42px)] max-[600px]:col-span-full max-[600px]:text-[31px] tracking-wide">
        {service.title}
        {service.decorated && (
          <img
            className="absolute top-1/2 left-[55%] z-[-1] size-[104px] -translate-y-1/2 max-[600px]:size-[68px]"
            src="/progres-img.png"
            alt=""
          />
        )}
      </h3>
      <span
        className="relative block h-px w-[60px] justify-self-end bg-ink transition-transform duration-[180ms] after:absolute after:-top-1 after:right-0 after:size-2 after:rotate-45 after:border-t after:border-r after:border-ink after:content-[''] group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 max-[900px]:w-[38px] max-[600px]:col-start-2 max-[600px]:row-start-1"
        aria-hidden="true"
      />
    </a>
  );
}

export default ServiceRow;
