import { motion } from 'framer-motion';

export default function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 focus:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://drive.google.com/uc?export=view&id=1dkGd8MNTTw4ZoIv2PhaYSZY2AZ1xvKU-"
        alt="experience"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Bootcamp</h4>
        <p className="font-bold text-2xl mt-1">Microverse</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            alt="firebase"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            alt="firebase"
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
            alt="firebase"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points</li>
          <li>Summary points Summary points</li>
          <li>Summary points Summary points</li>
          <li>Summary points Summary points</li>
          <li>Summary points Summary points</li>
        </ul>
      </div>
    </article>
  );
}
