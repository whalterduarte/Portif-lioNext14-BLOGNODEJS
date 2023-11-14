import Image from 'next/image';





function AboutSection() {
  return (
    <section
      id='about'
      className='container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24'
    >
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]'>
        <div className='lg:pl-20 flex justify-center'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src='/avatar.png'
              alt='Whalter Duarte'
              width={800}
              height={800}
              quality='95'
              priority={true}
              className='aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2 text-center md:text-start'>
          <h1 className='font-heading text-3xl md:text-4xl lg:text-5xl'>
            @whalterduarte
          </h1>
          <p className='mt-6 text-base text-muted-foreground'>
          Passionate technology enthusiast with a journey starting in 2015, 
          exploring HTML, CSS, and JavaScript. As a Full Stack Developer, I
           specialize in crafting innovative solutions with React, React Native, 
           and Node.js. Proficient in frameworks like Express.js and tools such as 
           Redux, Docker, and JWT, I bring expertise in MVC, Monolithic, and Microservices. 
           Committed to building scalable solutions, adhering to best practices, and 
           fostering a continuous pursuit of innovation.
          </p>
         
            
          </div>
        </div>
       
    </section>
  );
}

export default AboutSection;
