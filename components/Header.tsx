import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon url="http://www.linkedin.com/andrianarivo" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="http://www.linkedin.com/andrianarivo" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="http://www.linkedin.com/andrianarivo" fgColor="gray" bgColor="transparent" />
      </motion.div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
      </div>
    </header>
  );
}
