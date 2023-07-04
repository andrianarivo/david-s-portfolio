import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
        src="https://drive.google.com/uc?export=view&id=1oTDjIpwEyObXhkkKALLXZwxa9eU9xskE"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a
          {' '}
          <span className="underline decoration-[#f7ab0a]">little</span>
          {' '}
          background:
        </h4>
        <p className="text-base text-justify">
          {`
I'm Andrianarivo David, a computer science professional from Madagascar with extensive experience in full-stack development. I excel in React.js for front-end and Node.js/Ruby on Rails for back-end. Let's connect at andrianarivo.david@gmail.com to discuss your projects and goals.
        `}
        </p>
      </div>
    </motion.div>
  );
}
