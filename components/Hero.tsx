import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '@/components/BackgroundCircles';
import Link from 'next/link';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Passionated',
      'Coder',
      'Leader',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/32914511?v=4"
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Fullstack Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton" type="button">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton" type="button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton" type="button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton" type="button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
