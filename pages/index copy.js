import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FadeIn } from '@components/FadeIn';
import { Gradient } from '@components/Gradient';
import MobileNav from '@components/MobileNav';
import { EB_Garamond, Inter } from '@next/font/google';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import cn from 'classnames';
import { motion, useScroll, useTime, useTransform } from 'framer-motion';

import styles from '../components/index.module.css';

import '@splidejs/react-splide/css';

import Pattern from '@components/Pattern';
import Countdown from 'react-countdown';
import Carousel, { Modal, ModalGateway } from 'react-images';

const inter = Inter({ subsets: ['latin'] });
const eb = EB_Garamond({ subsets: ['latin'] });

export default function Home() {
  const time = useTime();
  const rotate = useTransform(time, [0, 15000], [0, 360], { clamp: false });
  const rainbow = [
    '#eab308',
    '#22c55e',
    '#0ea5e9',
    '#eab308',
    '#22c55e',
    '#0ea5e9',
    '#eab308',
    '#22c55e',
    '#0ea5e9',
    '#eab308',
    '#22c55e',
    '#0ea5e9',
  ];
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

  const album = [
    {
      src: 'https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80',
    },
  ];

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
    header: (base, state) => {
      const opacity = 1;
      const transform = 'translateY(10px)';
      const top = '-10';
      return { ...base, opacity, transform, top };
    },
    navigation: (base, state) => {
      const opacity = 1;
      const background = 'rgba(0, 0, 0, 0.8)';
      return { ...base, opacity, background };
    },
    navigationPrev: (base, state) => {
      const background = 'rgba(0, 0, 0, 0.5) !important';
      return { ...base, background };
    },
    navigationNext: (base, state) => {
      const background = 'rgba(0, 0, 0, 0.5) !important';
      return { ...base, background };
    },
    footer: (base, state) => {
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

          <section
            id='pattern'
            className='relative mb-24 flex h-full w-full items-center justify-center sm:pt-16 md:mb-12 md:pt-0'
          >
            <FadeIn className='z-10 mt-8 w-full justify-center space-y-8 sm:mt-40 sm:space-y-12 md:mt-0 md:flex md:gap-16 md:space-y-0'>
              <div className='relative flex h-[180px] w-full items-center justify-center md:w-1/6'>
                <div className='absolute z-10 min-h-[550px] min-w-[550px] md:min-h-[600px] md:min-w-[600px]'>
                  <Image
                    alt='Turborepo'
                    src='/pack-hexagons.svg'
                    fill='true'
                    // className="block"
                  />
                </div>
                <div className='absolute z-10 flex h-64 w-64 items-center justify-center'>
                  <Gradient small width={120} height={120} conic className='opacity-100' />
                </div>
                <div className='z-10 h-[150px] w-[150px]'>
                  <Image
                    alt=''
                    src={`/pack-logo.svg`}
                    fill='true'
                    // className="block"
                  />
                </div>
              </div>
              <div className='relative z-20 flex h-[180px] w-full items-center justify-center md:w-1/6'>
                <h1 className='bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-6xl font-bold text-transparent sm:text-8xl'>
                  {/* <span className={eb.className}>&</span> */}&
                </h1>
              </div>
              <div className='relative flex h-[180px] w-full items-center justify-center md:w-1/6'>
                <div className='absolute min-h-[550px] min-w-[550px] md:min-h-[600px] md:min-w-[600px]'>
                  <Image alt='Turborepo' src='/pack-hexagons.svg' fill='true' className='block' />
                </div>
                <div className='absolute z-10 flex h-64 w-64 items-center justify-center'>
                  <Gradient small width={120} height={120} conic className='opacity-100' />
                </div>
                <div className='z-10 h-[150px] w-[150px]'>
                  <Image alt='' src={`/pack-logo.svg`} fill='true' className='block' />
                </div>
              </div>
            </FadeIn>
            <Gradient width={1000} height={700} className='top-[-200px] opacity-20' conic />
            {/* <div className="absolute top-0 z-10 w-full h-32 from-black to-transparent bg-gradient-to-b" /> */}
          </section>

          <section className='relative flex h-full items-center py-24 sm:pt-64 md:pt-8'>
            <div className='flex w-full flex-col items-center justify-center gap-8 md:flex-row lg:gap-24'>
              <FadeIn delay={0.3}>
                <div className={cn(styles['counter-border'], 'no-underline')}>
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
                      <div className='w-54 h-54 absolute inset-0 z-10 bg-gradient-to-b from-sky-500 to-yellow-500 opacity-[0.3] mix-blend-normal blur-[60px]' />
                      {/* <div className="bg-black h-64 w-64"> */}
                      <div className='relative h-64 w-64'>
                        <Image alt='John' src={`/johns.png`} fill='true' className='rounded-3xl' />
                      </div>
                      {/* </div> */}
                    </div>
                    <div className='flex justify-center'>
                      <span className='mt-5 text-2xl font-bold tracking-wide text-gray-200 no-underline'>John Doe</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <div className='flex items-center justify-center bg-gradient-to-r from-yellow-500 via-green-500 to-sky-500 bg-clip-text text-6xl font-semibold text-transparent sm:text-8xl'>
                &
              </div>
              <FadeIn delay={0.5}>
                <div className={cn(styles['counter-border-blue'], 'no-underline')}>
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
                      <div className='w-54 h-54 absolute inset-0 z-10 bg-gradient-to-b from-sky-500 to-yellow-500 opacity-[0.3] mix-blend-normal blur-[60px]' />
                      {/* <div className="bg-black h-64 w-64"> */}
                      <div className='relative h-64 w-64'>
                        <Image alt='Jane' src={`/janes.png`} fill='true' className='rounded-3xl' />
                      </div>
                      {/* </div> */}
                    </div>
                    <div className='flex justify-center'>
                      <span className='mt-5 text-2xl font-bold tracking-wide text-gray-200 no-underline'>Jane Doe</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <section id='title' className='relative my-16 flex h-screen w-full items-center pb-8'>
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
            <span className='absolute bottom-0 left-0 right-0 h-14 w-full bg-gradient-to-t from-black to-transparent' />
          </section>

          <section id='event' className='relative my-16 flex h-screen w-full items-center justify-center md:my-24'>
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
              <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-4xl font-extrabold leading-tight text-transparent md:text-5xl'>
                Schedule
              </h1>
              <div className='mb-16 flex justify-center'>
                <Pattern />
              </div>
              <FadeIn delay={0.3}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-2xl font-extrabold leading-tight text-transparent lg:text-3xl'>
                  August 1, 2023
                </h1>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-xl font-extrabold leading-tight text-transparent lg:text-2xl'>
                  5:00 PM - 6:00 PM
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
              <h1 className='mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-4xl font-extrabold text-transparent md:-mt-32 md:text-5xl'>
                Location
              </h1>
              <div className='mb-16 flex justify-center'>
                <Pattern />
              </div>
              {/* <h1 className="mb-20 md:mb-0 text-center relative md:absolute md:right-4 md:[writing-mode:vertical-rl] z-20 font-extrabold text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Location
              </h1> */}
              <FadeIn delay={0.3}>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-2xl font-extrabold leading-tight text-transparent lg:text-3xl'>
                  Jl. Panglima Sudirman, Kec. Genteng,
                </h1>
                <h1 className='z-10 mx-6 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-xl font-extrabold leading-tight text-transparent lg:text-2xl'>
                  Kota SBY, Jawa Timur
                </h1>
                <div className='mb-4 flex justify-center'>
                  <button
                    onClick={() => setShowMap(!showMap)}
                    className='group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
                  >
                    <span className='relative rounded-md bg-black px-6 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
                      {showMap ? 'Hide Map' : 'Show Map'}
                    </span>
                  </button>
                </div>
              </FadeIn>
              {showMap ? (
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
              ) : null}
            </div>
          </div>

          <section id='gridd' className='relative flex min-h-screen items-center justify-between pb-36 pt-24 md:pb-16'>
            <div className='gridd-bg'></div>
            {/* <h1 className="absolute right-0 top-[38%] lg:[writing-mode:vertical-rl] z-20 font-extrabold  text-2xl lg:text-4xl pt-10 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
              GALERI
            </h1>
            <div className="absolute left-0 top-0 z-20 flex items-center justify-end h-screen">
              <h1 className="[writing-mode:vertical-rl] z-10 font-extrabold md:text-left text-2xl lg:text-4xl p-4 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                GALERI
              </h1>
            </div> */}
            <div>
              <h1 className='relative z-20 mb-4 bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-5xl'>
                Gallery
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

          <section id='countdown' className='relative z-[1] mt-16 h-screen w-screen'>
            <span className={cn(styles.leftLights, 'opacity-100')} />
            <span className={cn(styles.rightLights, 'opacity-100')} />
            <span className='absolute bottom-0 left-0 right-0 h-48 w-full bg-gradient-to-t from-black to-transparent' />
            <span className='absolute left-0 right-0 top-[10vh] h-[20vh] w-full bg-black' />
            <span className='absolute left-0 right-0 top-[20vh] h-[550vh] w-full bg-gradient-to-b from-black to-transparent'></span>
            <div className='container ![perspective:1000px]'>
              <div
                className='absolute inset-0'
                style={{
                  transform: 'rotateX(75deg)',
                }}
              >
                <div className='lines' />
              </div>
            </div>
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
                <h1 className='bg-gradient-to-b from-white to-[#AAAAAA] bg-clip-text p-4 text-center text-4xl font-extrabold text-transparent md:text-5xl'>
                  Countdown
                </h1>
                <div className='relative z-10 mb-16 flex justify-center sm:mb-32'>
                  <Pattern />
                </div>
                <Countdown
                  date={'2023-11-14'}
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
        </div>
      </main>
    </>
  );
}
