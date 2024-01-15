import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FadeIn } from '@components/FadeIn';
import { Gradient } from '@components/Gradient';
import MobileNav, { Border } from '@components/MobileNav';
import { EB_Garamond, Inter } from '@next/font/google';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import cn from 'classnames';
import { motion, useScroll, useTime, useTransform } from 'framer-motion';

import styles from '../components/index.module.css';

import '@splidejs/react-splide/css';

import { useRouter } from 'next/router';
import Pattern from '@components/Pattern';
import Countdown from 'react-countdown';
import Carousel, { Modal, ModalGateway } from 'react-images';

const inter = Inter({ subsets: ['latin'] });
const eb = EB_Garamond({ subsets: ['latin'] });

const recipientLists = [
  {
    slug: 'john-doe',
    name: 'John Doe',
  },
  {
    slug: 'jane-doe',
    name: 'Jane Doe',
  },
];

export default function Home() {
  const router = useRouter();
  const query = router.query?.to;
  const recipient = recipientLists.find((item) => item.slug == query) || { name: 'Tamu Undangan' };
  const time = useTime();
  const rotate = useTransform(time, [0, 15000], [0, 360], { clamp: false });
  // const rainbow = ["#eab308", "#22c55e", "#0ea5e9", "#eab308", "#22c55e", "#0ea5e9", "#eab308", "#22c55e", "#0ea5e9", "#eab308", "#22c55e", "#0ea5e9"];
  const rainbow = ['#191919', '#f5f5f5', '#050505', '#191919', '#f5f5f5', '#050505'];
  const { scrollYProgress } = useScroll();
  const range = Array.from(Array(rainbow.length).keys()).map((v) => v / (rainbow.length - 1));
  const rainbowColors = useTransform(scrollYProgress, range, rainbow);
  const forwardX = useTransform(scrollYProgress, [0, 1], ['-50%', '100%']);
  const backwardsX = useTransform(scrollYProgress, [0, 1], ['50%', '-100%']);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const albums = [
    {
      src: '/johns.png',
    },
    {
      src: '/janes.png',
    },
    {
      src: '/johns.png',
    },
    {
      src: '/janes.png',
    },
    {
      src: '/johns.png',
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  function handleOpenGallery(id) {
    setCurrentImage(id);
    setViewerIsOpen(true);
  }

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const lightboxStyles = {
    header: (base) => {
      const opacity = 1;
      const transform = 'translateY(10px)';
      const top = '-10';
      return { ...base, opacity, transform, top };
    },
    navigation: (base) => {
      const opacity = 1;
      const background = 'rgba(0, 0, 0, 0.8)';
      return { ...base, opacity, background };
    },
    navigationPrev: (base) => {
      const background = 'rgba(0, 0, 0, 0.5) !important';
      return { ...base, background };
    },
    navigationNext: (base) => {
      const background = 'rgba(0, 0, 0, 0.5) !important';
      return { ...base, background };
    },
    footer: (base) => {
      const opacity = 1;
      const transform = 'translateY(-10px)';
      const bottom = '-10';
      return { ...base, opacity, transform, bottom };
    },
  };

  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Next Invitation</title>
        <meta name='title' content='Next Invitation' />
        <meta name='description' content='Next Invitation' />
        <link rel='icon' href='/favicon.ico' />
        {/* <!-- Open Graph / Facebook --/> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://next-invitation.vercel.app/' />
        <meta property='og:title' content='Next Invitation' />
        <meta property='og:description' content='Next Invitation' />
        <meta property='og:image' content='https://next-invitation.vercel.app/og.jpg' />
        {/* <!-- Twitter --/> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://next-invitation.vercel.app/' />
        <meta property='twitter:title' content='Next Invitation' />
        <meta property='twitter:description' content='Next Invitation' />
        <meta property='twitter:image' content='https://next-invitation.vercel.app/og.jpg' />
      </Head>

      <main className='relative min-h-screen overflow-hidden bg-black text-white'>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                styles={lightboxStyles}
                showNavigationOnTouchDevice={true}
                currentIndex={currentImage}
                views={albums.map((x) => ({
                  ...x,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <div className={inter.className}>
          <MobileNav />

          <section id='invite' className='relative flex min-h-screen items-center justify-center pb-36 pt-20 md:pb-16'>
            {/* <div className="invite-bg"></div> */}
            <Gradient width={1200} height={500} className='top-[-250px] opacity-30' conic />
            <div>
              <h1 className={cn(eb.className, 'mx-auto max-w-lg px-4 text-center text-2xl font-semibold sm:text-3xl')}>
                WE INVITE YOU TO CELEBRATE OUR WEDDING
              </h1>
              {/* <Border className="mx-auto" /> */}
              <div className='mb-2 mt-4 flex justify-center'>
                <Pattern />
              </div>
              <div className='mb-20 mt-4 flex items-center justify-center gap-4 px-4 italic'>
                <h1
                  className={cn(
                    eb.className,
                    'bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-4xl font-bold italic text-transparent md:text-left',
                  )}
                >
                  <i>John</i>
                </h1>
                <h1 className='bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-center'>
                  &
                </h1>
                <h1
                  className={cn(
                    eb.className,
                    'bg-gradient-to-t from-white via-neutral-300 to-neutral-500 bg-clip-text px-2 text-4xl font-bold italic text-transparent md:text-left',
                  )}
                >
                  <i>Jane</i>
                </h1>
              </div>
              <p className='mb-4 text-center text-lg text-neutral-200'>Kepada Bapak/Ibu/Saudara/i</p>
              <h2 className={cn(eb.className, 'mx-auto max-w-lg px-4 text-center text-4xl font-semibold sm:text-5xl')}>
                {recipient.name}
              </h2>
              {recipient.name != 'Tamu Undangan' && (
                <p className='mt-8 px-4 text-center text-xs italic text-neutral-400'>
                  *Mohon Maaf Apabila Ada Kesalahan Dalam Penulisan Nama/Gelar
                </p>
              )}
            </div>
          </section>

          <section
            id='pattern'
            className='relative flex h-full min-h-screen w-full items-center justify-center pb-16 pt-16 sm:pb-8 sm:pt-8 md:pb-0 md:pt-0'
          >
            <div className='flex w-full flex-col items-center justify-center gap-8 md:flex-row lg:gap-24'>
              <FadeIn delay={0.3}>
                <div className={cn(styles['counter-border'], 'pointer-events-none mt-20 no-underline md:mt-0')}>
                  <motion.i
                    initial='visible'
                    animate={{ opacity: 1 }}
                    variants={{
                      hidden: { opacity: 0 },
                      active: { opacity: 1 },
                    }}
                    aria-hidden='true'
                  ></motion.i>
                  <div className='p-6'>
                    <div className='relative flex items-center justify-center'>
                      <div className='w-54 h-54 absolute inset-0 z-10 bg-gradient-to-b from-sky-500 via-green-600 to-yellow-500 opacity-[0.3] mix-blend-normal blur-[60px]' />
                      {/* <div className="bg-black h-64 w-64"> */}
                      <div className='relative h-64 w-64'>
                        <Image alt='John' src={`/johns.png`} fill='true' className='rounded-3xl' />
                      </div>
                      {/* </div> */}
                    </div>
                    <div className='flex justify-center'>
                      {/* <span className='mt-5 text-2xl font-bold tracking-wide text-gray-200'>John Doe</span> */}
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className='relative z-10 flex items-center justify-center bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-6xl font-semibold text-transparent sm:text-8xl'>
                  &
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className={cn(styles['counter-border-blue'], 'pointer-events-none no-underline')}>
                  <motion.i
                    initial='visible'
                    animate={{ opacity: 1 }}
                    variants={{
                      hidden: { opacity: 0 },
                      active: { opacity: 1 },
                    }}
                    aria-hidden='true'
                  ></motion.i>
                  <div className='p-6'>
                    <div className='relative flex items-center justify-center'>
                      <div className='w-54 h-54 absolute inset-0 z-10 bg-gradient-to-b from-sky-500 via-green-600 to-yellow-500 opacity-[0.3] mix-blend-normal blur-[60px]' />
                      {/* <div className="bg-black h-64 w-64"> */}
                      <div className='relative h-64 w-64'>
                        <Image alt='Jane' src={`/janes.png`} fill='true' className='rounded-3xl' />
                      </div>
                      {/* </div> */}
                    </div>
                    <div className='flex justify-center'>
                      {/* <span className='mt-5 text-2xl font-bold tracking-wide text-gray-200'>Jane Doe</span> */}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <Gradient width={1000} height={500} className='top-[-50px] opacity-20' conic />
            <div className='absolute top-0 z-10 h-32 w-full bg-gradient-to-b from-black to-transparent' />
          </section>

          <section id='title' className='relative flex h-screen min-h-screen w-full items-center pb-8'>
            {/* <FadeIn delay={0.5}> */}

            <div className='w-full text-center'>
              <motion.p
                className='whitespace-nowrap bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text py-16 text-6xl font-bold tracking-wide text-transparent lg:text-8xl'
                style={{
                  x: forwardX,
                  WebkitTextStrokeColor: rainbowColors,
                  WebkitTextStroke: '2px currentColor',
                  // fontSize: 'calc(100vw / 20)',
                }}
              >
                <span className={eb.className}>
                  <i>John Doe</i>
                </span>
              </motion.p>
              {/* <h1 className="z-10 font-extrabold md:text-left text-5xl lg:text-6xl p-4 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                John
              </h1> */}
              <h1 className='z-10 bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text p-4 text-5xl font-extrabold text-transparent md:text-center lg:text-6xl'>
                /
              </h1>
              {/* <h1 className="z-10 font-extrabold md:text-right text-5xl lg:text-6xl p-4 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Doe
              </h1> */}
              <motion.p
                className='whitespace-nowrap bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text py-16 text-6xl font-bold tracking-wide text-transparent lg:text-8xl'
                style={{
                  x: backwardsX,
                  WebkitTextStrokeColor: rainbowColors,
                  WebkitTextStroke: '2px currentColor',
                  // fontSize: 'calc(100vw / 20)',
                }}
              >
                <span className={eb.className}>
                  <i>Jane Doe</i>
                </span>
              </motion.p>
            </div>

            {/* </FadeIn> */}
            <span className='absolute left-0 right-0 top-0 h-14 w-full bg-gradient-to-b from-black to-transparent' />
            <span className='absolute bottom-0 left-0 right-0 h-10 w-full bg-gradient-to-t from-black to-transparent' />
          </section>

          <section id='grid' className='flex h-screen w-full items-center justify-center'>
            <div className='grid-radial'></div>
            <motion.div
              id='gridd-bg'
              animate={{
                scale: [1, 1.1, 1, 0.9],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 10,
                ease: 'easeInOut',
                times: [0.9, 1, 0.9, 1],
                repeat: Infinity,
              }}
            />
            <div className={cn(eb.className, 'z-10 mx-4 max-w-xl text-center text-2xl text-white')}>
              <FadeIn delay={0.3}>
                <p className='bg-gradient-to-b from-white via-neutral-100 to-neutral-200 bg-clip-text px-4 text-center text-xl font-semibold text-transparent sm:text-2xl'>
                  Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari
                  (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
                  kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah)
                  bagi kaum yang berpikir.
                </p>
              </FadeIn>
              <Border className='mx-auto my-2' />
              <FadeIn delay={0.4}>
                <span className='-mt-2 font-medium italic'>(Q.S Ar-Rum : 21)</span>
              </FadeIn>
            </div>
          </section>

          <section id='event' className='relative my-10 flex h-screen w-full items-center justify-center md:my-20'>
            <motion.div
              className='absolute inset-0'
              style={{
                rotate,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50%',
                backgroundImage: 'url(/ring-small.svg)',
              }}
            />
            <div className='home_spotlight'></div>
            <div className='z-10 text-white'>
              <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-5xl font-extrabold leading-tight text-transparent md:text-6xl'>
                <span className={eb.className}>Schedule</span>
              </h1>
              <div className='mb-12 flex justify-center'>
                <Pattern />
              </div>
              <FadeIn delay={0.2}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-3xl font-extrabold leading-tight text-transparent lg:text-4xl'>
                  <span className={eb.className}>August 1, 2023</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-2xl font-extrabold leading-tight text-transparent lg:text-3xl'>
                  <span className={eb.className}>5:00 PM - 6:00 PM</span>
                </h1>
              </FadeIn>
            </div>
          </section>

          <div
            id='ripple'
            className='relative flex h-screen min-h-screen items-center justify-center pb-36 pt-16 md:pt-44'
          >
            {/* <div className="absolute top-[55%] z-10 flex items-center justify-center">
              <Gradient
                small
                width={810}
                height={400}
                conic
                className="opacity-100"
              />
            </div> */}
            <div>
              <h1 className='mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-5xl font-extrabold text-transparent md:-mt-32 md:text-6xl'>
                <span className={eb.className}>Location</span>
              </h1>
              <div className='mb-16 flex justify-center'>
                <Pattern />
              </div>
              {/* <h1 className="mb-20 md:mb-0 text-center relative md:absolute md:right-4 md:[writing-mode:vertical-rl] z-20 font-extrabold text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Location
              </h1> */}
              <FadeIn delay={0.2}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-3xl font-extrabold leading-tight text-transparent lg:text-4xl'>
                  <span className={eb.className}>Jl. Panglima Sudirman, Kec. Genteng</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-2xl font-extrabold leading-tight text-transparent lg:text-3xl'>
                  <span className={eb.className}>Kota SBY, Jawa Timur</span>
                </h1>
                <div className='mb-4 flex justify-center'>
                  {/* <button
                    onClick={() => setShowMap(!showMap)}
                    className='group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
                  >
                    <span className='relative rounded-md bg-black px-6 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
                      {showMap ? 'Hide Map' : 'Show Map'}
                    </span>
                  </button> */}
                </div>
              </FadeIn>
              {/* {showMap ? ( */}
              <div className='relative z-20 mx-4 flex justify-center rounded-2xl shadow-xl shadow-green-600/40'>
                <iframe
                  className='hidden rounded-2xl shadow-[1px_4px_10px_0px_rgba(255,155,0,1)] md:block'
                  width={800}
                  height={400}
                  src='https://maps.google.com/maps?q=-7.2677389,112.7443089&hl=es;z=18&amp;output=embed'
                />
                <iframe
                  className='hidden rounded-2xl shadow-[1px_4px_10px_0px_rgba(255,155,0,1)] xs:block md:hidden'
                  width={500}
                  height={300}
                  src='https://maps.google.com/maps?q=-7.2677389,112.7443089&hl=es;z=18&amp;output=embed'
                />
                <iframe
                  className='block h-64 w-full rounded-2xl shadow-[1px_4px_10px_0px_rgba(255,155,0,1)] xs:hidden'
                  src='https://maps.google.com/maps?q=-7.2677389,112.7443089&hl=es;z=18&amp;output=embed'
                />
              </div>
              {/* ) : null} */}
            </div>
          </div>

          <section id='gridd' className='relative flex min-h-screen items-center justify-between pb-36 pt-20 md:pb-16'>
            {/* <div className="gridd-bg"></div> */}
            {/* <h1 className="absolute right-0 top-[38%] lg:[writing-mode:vertical-rl] z-20 font-extrabold  text-2xl lg:text-4xl pt-10 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
              GALERI
            </h1>
            <div className="absolute left-0 top-0 z-20 flex items-center justify-end h-screen">
              <h1 className="[writing-mode:vertical-rl] z-10 font-extrabold md:text-left text-2xl lg:text-4xl p-4 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                GALERI
              </h1>
            </div> */}
            <div>
              <h1 className='relative z-20 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-5xl font-extrabold text-transparent md:text-6xl'>
                <span className={eb.className}>Gallery</span>
              </h1>
              <div className='relative z-10 mb-20 flex justify-center md:mb-14'>
                <Pattern />
              </div>

              <div className='relative z-10 flex w-screen items-center justify-center'>
                <Splide
                  className='block md:hidden'
                  aria-label='Images'
                  options={{
                    type: 'loop',
                    drag: false,
                    focus: 'center',
                    pagination: false,
                    arrows: false,
                    perPage: 3,
                    rewind: true,
                    autoScroll: {
                      speed: 0.5,
                      pauseOnHover: false,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(0)}
                        className='relative h-80 rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-yellow-500/40'
                      >
                        <Image alt='John' src={`/johns.png`} fill='true' className='rounded-xl' />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(1)}
                        className='relative h-80 -rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-yellow-500/40'
                      >
                        <Image alt='Jane' src={`/janes.png`} fill='true' className='rounded-xl' />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(2)}
                        className='relative h-80 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-teal-500/40'
                      >
                        <Image alt='John' src={`/johns.png`} fill='true' className='rounded-xl' />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(3)}
                        className='relative h-80 rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-sky-600/40'
                      >
                        <Image alt='Jane' src={`/janes.png`} fill='true' className='rounded-xl' />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className='p-8'>
                      <div
                        onClick={() => handleOpenGallery(4)}
                        className='relative h-80 -rotate-3 cursor-pointer rounded-xl bg-black/50 shadow-lg shadow-sky-600/40'
                      >
                        <Image alt='John' src={`/johns.png`} fill='true' className='rounded-xl' />
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>

                <div className='hidden md:block'>
                  {/* <h1 className="relative z-20 font-extrabold text-center text-2xl lg:text-4xl p-4 mb-4 bg-clip-text text-transparent pb-16 bg-gradient-to-b from-white to-[#AAAAAA]">
                    GALERI
                  </h1> */}

                  <FadeIn delay={0.3}>
                    <div className='flex justify-center gap-10 overflow-hidden py-10'>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='cursor-pointer'
                        onClick={() => handleOpenGallery(0)}
                      >
                        <div className='relative aspect-[9/10] w-72 flex-none rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-yellow-500/40'>
                          <Image alt='John' src={`/johns.png`} fill='true' className='rounded-2xl' />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='cursor-pointer'
                        onClick={() => handleOpenGallery(1)}
                      >
                        <div className='relative aspect-[9/10] w-72 flex-none -rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-yellow-500/40'>
                          <Image alt='Jane' src={`/janes.png`} fill='true' className='rounded-2xl' />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='cursor-pointer'
                        onClick={() => handleOpenGallery(2)}
                      >
                        <div className='relative aspect-[9/10] w-72 flex-none rounded-2xl bg-black/50 shadow-lg shadow-teal-500/40'>
                          <Image alt='John' src={`/johns.png`} fill='true' className='rounded-2xl' />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='cursor-pointer'
                        onClick={() => handleOpenGallery(3)}
                      >
                        <div className='relative aspect-[9/10] w-72 flex-none rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-sky-600/40'>
                          <Image alt='Jane' src={`/janes.png`} fill='true' className='rounded-2xl' />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        className='cursor-pointer'
                        onClick={() => handleOpenGallery(4)}
                      >
                        <div className='relative aspect-[9/10] w-72 flex-none -rotate-3 rounded-2xl bg-black/50 shadow-lg shadow-sky-600/40'>
                          <Image alt='John' src={`/johns.png`} fill='true' className='rounded-2xl' />
                        </div>
                      </motion.div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          <section
            id='interstellar'
            className='relative flex min-h-screen w-full items-center justify-center overflow-hidden'
          >
            <div>
              <FadeIn delay={0.3}>
                <p
                  className={cn(
                    eb.className,
                    'max-w-lg bg-gradient-to-b from-white via-neutral-100 to-neutral-200 bg-clip-text px-4 text-center text-xl font-semibold text-transparent md:text-2xl',
                  )}
                >
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
                  memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className='mt-12 flex justify-center'>
                  <Border />
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className='mt-8 flex items-center justify-center gap-4 px-4 italic'>
                  <h1
                    className={cn(
                      eb.className,
                      'bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text py-2 pl-2 text-5xl font-bold italic text-transparent md:text-left',
                    )}
                  >
                    <i>John</i>
                  </h1>
                  <h1 className='bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-center'>
                    &
                  </h1>
                  <h1
                    className={cn(
                      eb.className,
                      'bg-gradient-to-t from-white via-neutral-300 to-neutral-500 bg-clip-text px-2 py-2 text-5xl font-bold italic text-transparent md:text-left',
                    )}
                  >
                    <i>Jane</i>
                  </h1>
                </div>
              </FadeIn>
            </div>
            <Gradient width={1200} height={300} className='bottom-[-200px] opacity-20' conic />
          </section>

          <section
            id='countdown'
            className='relative mt-16 flex h-screen min-h-screen items-center justify-center overflow-hidden sm:mt-8 md:mt-0'
          >
            <span className={cn(styles.leftLights, 'opacity-100')} />
            <span className={cn(styles.rightLights, 'opacity-100')} />
            <span className='absolute left-0 right-0 top-0 h-[70vh] w-full bg-gradient-to-b from-black to-transparent'></span>
            <span className='absolute bottom-0 left-0 right-0 h-64 w-full bg-gradient-to-t from-black to-transparent' />
            <motion.svg
              width='200'
              height='200'
              viewBox='0 0 600 600'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='absolute top-20 z-10 md:left-14'
            >
              <motion.circle
                cx='100'
                cy='100'
                r='80'
                className='fill-transparent stroke-yellow-500/50'
                variants={draw}
                custom={1}
              />
            </motion.svg>
            <motion.svg
              width='200'
              height='200'
              viewBox='0 0 600 600'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='absolute -left-40 top-14 z-10 md:-left-10'
            >
              <motion.rect
                width='140'
                height='140'
                x='410'
                y='30'
                rx='20'
                className='fill-transparent stroke-sky-500/50 stroke-1'
                variants={draw}
                custom={3}
              />
            </motion.svg>
            <motion.svg
              width='200'
              height='200'
              viewBox='0 0 600 600'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='absolute -right-32 top-16 z-10'
            >
              <motion.circle cx='100' cy='100' r='50' className='stroke-yellow-500/50' variants={draw} custom={1} />
            </motion.svg>
            <motion.svg
              width='200'
              height='200'
              viewBox='0 0 600 600'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='absolute -right-16 top-16 z-10'
            >
              <motion.line
                x1='220'
                y1='30'
                x2='360'
                y2='170'
                className='stroke-yellow-500/50'
                variants={draw}
                custom={2}
              />
              <motion.line
                x1='220'
                y1='170'
                x2='360'
                y2='30'
                className='stroke-sky-500/50'
                variants={draw}
                custom={2.5}
              />
            </motion.svg>
            <div className='relative flex h-screen items-center justify-center'>
              <div className='-mt-16'>
                <h1 className='bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text p-4 text-center text-5xl font-extrabold text-transparent md:text-6xl'>
                  <span className={eb.className}>Countdown</span>
                </h1>
                <div className='relative z-10 mb-16 flex justify-center sm:mb-32'>
                  <Pattern />
                </div>
                <Countdown
                  date={'2024-11-14'}
                  renderer={(props) => (
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-4 md:gap-16'>
                      <FadeIn delay={0.2}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.days}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Days</p>
                        </div>
                      </FadeIn>
                      <FadeIn delay={0.3}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-t from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.hours}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Hours</p>
                        </div>
                      </FadeIn>
                      <FadeIn delay={0.4}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-l from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.minutes}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Minutes</p>
                        </div>
                      </FadeIn>
                      <FadeIn delay={0.5}>
                        <div className='text-center'>
                          <p
                            suppressHydrationWarning={true}
                            className='bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl'
                          >
                            {props.seconds}
                          </p>
                          <p className='mt-2 text-xl font-medium text-neutral-300'>Seconds</p>
                        </div>
                      </FadeIn>
                    </div>
                  )}
                />
              </div>
            </div>
          </section>

          {/* <section id="countdown" className="relative z-[1] h-screen w-screen mt-16 sm:mt-8 md:mt-0">
            <span className={cn(styles.leftLights, "opacity-100")} />
            <span className={cn(styles.rightLights, "opacity-100")} />
            <span className="absolute bottom-0 left-0 right-0 w-full h-48 bg-gradient-to-t from-black to-transparent" />
            <span className="bg-black absolute top-[10vh] left-0 right-0 w-full h-[20vh]" />
            <span className="bg-gradient-to-b from-black to-transparent absolute top-[20vh] left-0 right-0 w-full h-[550vh]"></span>
            <div className="container ![perspective:1000px]">
              <div className="absolute inset-0"
                style={{
                  transform: "rotateX(75deg)",
                }}
              >
                <div className="lines" />
              </div>
            </div>
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 600 600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute z-10 top-20 md:left-14"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                className="stroke-yellow-500/50 fill-transparent"
                variants={draw}
                custom={1}
              />
            </motion.svg>
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 600 600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute z-10 top-14 -left-40 md:-left-10"
            >
              <motion.rect
                width="140"
                height="140"
                x="410"
                y="30"
                rx="20"
                className="stroke-sky-500/50 stroke-1 fill-transparent"
                variants={draw}
                custom={3}
              />
            </motion.svg>
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 600 600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute z-10 top-16 -right-32"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="50"
                className="stroke-yellow-500/50"
                variants={draw}
                custom={1}
              />
            </motion.svg>
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 600 600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute z-10 -right-16 top-16"
            >
              <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                className="stroke-yellow-500/50"
                variants={draw}
                custom={2}
              />
              <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                className="stroke-sky-500/50"
                variants={draw}
                custom={2.5}
              />
            </motion.svg>
            <div className="relative flex items-center h-screen justify-center">
              <div className="-mt-16">
                <h1 className="font-extrabold text-center text-5xl md:text-6xl p-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                  <span className={eb.className}>Countdown</span>
                </h1>
                <div className="relative z-10 flex justify-center mb-16 sm:mb-32">
                  <Pattern />
                </div>
                <Countdown date={'2023-11-14'} renderer={props => (
                  <div className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-4 gap-8 md:gap-16">
                    <FadeIn delay={0.2}>
                      <div className="text-center">
                        <p suppressHydrationWarning={true} className="font-bold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-green-500 to-sky-500">
                          {props.days}
                        </p>
                        <p className="text-xl font-medium mt-2 text-neutral-300">Days</p>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                      <div className="text-center">
                        <p suppressHydrationWarning={true} className="font-bold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 via-green-500 to-sky-500">
                          {props.hours}
                        </p>
                        <p className="text-xl font-medium mt-2 text-neutral-300">Hours</p>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                      <div className="text-center">
                        <p suppressHydrationWarning={true} className="font-bold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 via-green-500 to-sky-500">
                          {props.minutes}
                        </p>
                        <p className="text-xl font-medium mt-2 text-neutral-300">Minutes</p>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                      <div className="text-center">
                        <p suppressHydrationWarning={true} className="font-bold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500">
                          {props.seconds}
                        </p>
                        <p className="text-xl font-medium mt-2 text-neutral-300">Seconds</p>
                      </div>
                    </FadeIn>
                  </div>
                )} />
              </div>
            </div>
          </section> */}
        </div>
      </main>
    </>
  );
}
