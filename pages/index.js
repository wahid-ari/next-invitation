import Head from 'next/head'
import Image from 'next/image';
import { Inter, EB_Garamond } from '@next/font/google';
import MobileNav from '@components/MobileNav';
import { FadeIn } from '@components/FadeIn';
import { Gradient } from '@components/Gradient';
import cn from "classnames";
import styles from '../components/index.module.css'
import { motion, useTime, useTransform, useScroll } from "framer-motion";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const inter = Inter({ subsets: ['latin'] });
const eb = EB_Garamond({ subsets: ['latin'] });

export default function Home() {
  const time = useTime();
  const rotate = useTransform(time, [0, 15000], [0, 360], { clamp: false });
  const rainbow = ["#eab308", "#22c55e", "#0ea5e9", "#eab308", "#22c55e", "#0ea5e9"];
  const { scrollYProgress } = useScroll();
  const range = Array.from(Array(rainbow.length).keys()).map(
    (v) => v / (rainbow.length - 1)
  );
  const rainbowColors = useTransform(scrollYProgress, range, rainbow);
  const forwardX = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);
  const backwardsX = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Next Invitation</title>
        <meta name="title" content="Next Invitation" />
        <meta name="description" content="Next Invitation" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Open Graph / Facebook --/> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-invitation.vercel.app/" />
        <meta property="og:title" content="Next Invitation" />
        <meta property="og:description" content="Next Invitation" />
        <meta property="og:image" content="https://next-invitation.vercel.app/og.jpg" />
        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://next-invitation.vercel.app/" />
        <meta property="twitter:title" content="Next Invitation" />
        <meta property="twitter:description" content="Next Invitation" />
        <meta property="twitter:image" content="https://next-invitation.vercel.app/og.jpg" />
      </Head>

      <main className="bg-black text-white min-h-screen relative overflow-hidden">
        <div className={inter.className}>

          {/* <audio className="relative z-20"
            controls
            autoPlay={true}
            loop={true}
            preload="auto"
            src="/music.mp3">
          </audio> */}

          <MobileNav />

          <section id="pattern" className="relative w-full h-full flex items-center justify-center mb-24 md:mb-12 sm:pt-16 md:pt-0">
            <FadeIn className="z-10 mt-8 sm:mt-40 md:mt-0 md:flex justify-center md:gap-16 space-y-8 sm:space-y-12 md:space-y-0 w-full">
              <div className="w-full h-[180px] md:w-1/6 relative flex items-center justify-center">
                <div className="absolute z-10 min-w-[550px] min-h-[550px] md:min-w-[600px] md:min-h-[600px]">
                  <Image
                    alt="Turborepo"
                    src="/pack-hexagons.svg"
                    fill="true"
                  // className="block"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-64 h-64">
                  <Gradient
                    small
                    width={120}
                    height={120}
                    conic
                    className="opacity-100"
                  />
                </div>
                <div className="w-[150px] h-[150px] z-10">
                  <Image
                    alt=""
                    src={`/pack-logo.svg`}
                    fill="true"
                  // className="block"
                  />
                </div>
              </div>
              <div className="relative z-20 w-full h-[180px] md:w-1/6 flex items-center justify-center">
                <h1 className="text-6xl sm:text-8xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-500 to-sky-600">
                  {/* <span className={eb.className}>&</span> */}
                  &
                </h1>
              </div>
              <div className="w-full h-[180px] md:w-1/6 relative flex items-center justify-center">
                <div className="absolute min-w-[550px] min-h-[550px] md:min-w-[600px] md:min-h-[600px]">
                  <Image
                    alt="Turborepo"
                    src="/pack-hexagons.svg"
                    fill="true"
                    className="block"
                  />
                </div>
                <div className="absolute z-10 flex items-center justify-center w-64 h-64">
                  <Gradient
                    small
                    width={120}
                    height={120}
                    conic
                    className="opacity-100"
                  />
                </div>
                <div className="w-[150px] h-[150px] z-10">
                  <Image
                    alt=""
                    src={`/pack-logo.svg`}
                    fill="true"
                    className="block"
                  />
                </div>
              </div>
            </FadeIn>
            <Gradient
              width={1000}
              height={700}
              className="top-[-200px] opacity-20"
              conic
            />
            {/* <div className="absolute top-0 z-10 w-full h-32 from-black to-transparent bg-gradient-to-b" /> */}
          </section>

          <section className="relative h-full flex items-center py-24 sm:pt-64 md:pt-8">
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 lg:gap-24">
              <FadeIn delay={0.3}>
                <div
                  className={cn(
                    styles["counter-border"],
                    "no-underline"
                  )}
                >
                  <motion.i
                    initial="visible"
                    animate={{ opacity: 1 }}
                    variants={{
                      hidden: { opacity: 0 },
                      active: { opacity: 1 },
                    }}
                    aria-hidden="true"
                  ></motion.i>
                  <div className="p-6">
                    <div className="relative flex items-center justify-center">
                      <div className="z-10 absolute w-54 h-54 inset-0 bg-gradient-to-b from-sky-500 to-yellow-500 mix-blend-normal opacity-[0.3] blur-[60px]" />
                      {/* <div className="bg-black h-64 w-64"> */}
                      <div className="relative w-64 h-64">
                        <Image
                          alt="John"
                          src={`/johns.png`}
                          fill="true"
                          className="rounded-3xl"
                        />
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="flex justify-center">
                      <span className="text-2xl no-underline mt-5 font-bold text-gray-200 tracking-wide">John Doe</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <div className="flex items-center justify-center text-6xl sm:text-8xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-yellow-500 to-sky-600">
                &
              </div>
              <FadeIn delay={0.5}>
                <div
                  className={cn(
                    styles["counter-border-blue"],
                    "no-underline"
                  )}
                >
                  <motion.i
                    initial="visible"
                    animate={{ opacity: 1 }}
                    variants={{
                      hidden: { opacity: 0 },
                      active: { opacity: 1 },
                    }}
                    aria-hidden="true"
                  ></motion.i>
                  <div className="p-6">
                    <div className="relative flex items-center justify-center">
                      <div className="z-10 absolute w-54 h-54 inset-0 bg-gradient-to-b from-sky-500 to-yellow-500 mix-blend-normal opacity-[0.3] blur-[60px]" />
                      {/* <div className="bg-black h-64 w-64"> */}
                      <div className="relative w-64 h-64">
                        <Image
                          alt="Jane"
                          src={`/janes.png`}
                          fill="true"
                          className="rounded-3xl"
                        />
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="flex justify-center">
                      <span className="text-2xl no-underline mt-5 font-bold text-gray-200 tracking-wide">Jane Doe</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <section id="title" className="relative h-screen w-full flex items-center my-16 pb-8">
            {/* <FadeIn delay={0.5}> */}

            <div className="w-full text-center">
              <motion.p
                className="text-6xl lg:text-8xl font-bold whitespace-nowrap tracking-wide py-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]"
                style={{
                  x: forwardX,
                  WebkitTextStrokeColor: rainbowColors,
                  WebkitTextStroke: '1px currentColor',
                  // fontSize: 'calc(100vw / 20)',
                }}
              >
                <span className={eb.className}><i>John Doe</i></span>
              </motion.p>
              {/* <h1 className="z-10 font-extrabold md:text-left text-5xl lg:text-6xl p-4 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                John
              </h1> */}
              <h1 className="z-10 font-extrabold md:text-center text-5xl lg:text-6xl p-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-sky-600">
                /
              </h1>
              {/* <h1 className="z-10 font-extrabold md:text-right text-5xl lg:text-6xl p-4 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Doe
              </h1> */}
              <motion.p
                className="text-6xl lg:text-8xl font-bold whitespace-nowrap tracking-wide py-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]"
                style={{
                  x: backwardsX,
                  WebkitTextStrokeColor: rainbowColors,
                  WebkitTextStroke: '1px currentColor',
                  // fontSize: 'calc(100vw / 20)',
                }}
              >
                <span className={eb.className}><i>Jane Doe</i></span>
              </motion.p>
            </div>

            {/* </FadeIn> */}
            <span className="absolute top-0 left-0 right-0 w-full h-14 bg-gradient-to-b from-black to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 w-full h-14 bg-gradient-to-t from-black to-transparent" />
          </section>

          <section className="relative w-full h-screen flex items-center justify-center my-16 md:my-24">
            <motion.div
              className="absolute inset-0"
              style={{
                rotate,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50%',
                backgroundImage: 'url(/ring-small.svg)'
              }}
            />
            <div className="home_spotlight"></div>
            <div className="z-10 text-white">
              <h1 className="z-10 mx-6 font-extrabold text-4xl md:text-5xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Schedule
              </h1>
              {/* <h1 className="z-10 mx-6 font-extrabold text-2xl lg:text-3xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Sabtu, 21 Desember
              </h1>
              <h1 className="z-10 mx-6 font-extrabold text-2xl lg:text-3xl leading-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                2022
              </h1> */}
            </div>
          </section>

          <section id="gridd" className="min-h-screen relative flex items-center justify-between">
            <div className="gridd-bg"></div>
            {/* <h1 className="absolute right-0 top-[38%] lg:[writing-mode:vertical-rl] z-20 font-extrabold  text-2xl lg:text-4xl pt-10 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
              GALERI
            </h1>
            <div className="absolute left-0 top-0 z-20 flex items-center justify-end h-screen">
              <h1 className="[writing-mode:vertical-rl] z-10 font-extrabold md:text-left text-2xl lg:text-4xl p-4 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                GALERI
              </h1>
            </div> */}
            <div>
              <h1 className="relative z-20 font-extrabold text-center mb-20 md:mb-10 text-4xl md:text-5xl p-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Gallery
              </h1>

              <div className="relative z-10 flex items-center justify-center w-screen">
                <Splide className="block md:hidden" aria-label="Images"
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
                    <div className="p-8">
                      <div className="relative h-80 bg-black/50 rounded-xl shadow-lg shadow-yellow-500/40 rotate-3">
                        <Image
                          alt="John"
                          src={`/johns.png`}
                          fill="true"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="p-8">
                      <div className="relative h-80 bg-black/50 rounded-xl shadow-lg shadow-yellow-500/40 -rotate-3">
                        <Image
                          alt="Jane"
                          src={`/janes.png`}
                          fill="true"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="p-8">
                      <div className="relative h-80 bg-black/50 rounded-xl shadow-lg shadow-teal-500/40">
                        <Image
                          alt="John"
                          src={`/johns.png`}
                          fill="true"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="p-8">
                      <div className="relative h-80 bg-black/50 rounded-xl shadow-lg shadow-sky-600/40 rotate-3">
                        <Image
                          alt="Jane"
                          src={`/janes.png`}
                          fill="true"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="p-8">
                      <div className="relative h-80 bg-black/50 rounded-xl shadow-lg shadow-sky-600/40 -rotate-3">
                        <Image
                          alt="John"
                          src={`/johns.png`}
                          fill="true"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>

                <div className="hidden md:block">
                  {/* <h1 className="relative z-20 font-extrabold text-center text-2xl lg:text-4xl p-4 mb-4 bg-clip-text text-transparent pb-16 bg-gradient-to-b from-white to-[#AAAAAA]">
                    GALERI
                  </h1> */}

                  <FadeIn delay={0.3}>
                    <div className="flex justify-center gap-10 overflow-hidden py-10">
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="relative aspect-[9/10] flex-none bg-black/50 shadow-lg shadow-yellow-500/40 w-72 rounded-2xl rotate-3">
                          <Image
                            alt="John"
                            src={`/johns.png`}
                            fill="true"
                            className="rounded-2xl"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="relative aspect-[9/10] flex-none bg-black/50 shadow-lg shadow-yellow-500/40 w-72 rounded-2xl -rotate-3">
                          <Image
                            alt="Jane"
                            src={`/janes.png`}
                            fill="true"
                            className="rounded-2xl"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="relative aspect-[9/10] flex-none bg-black/50 shadow-lg shadow-teal-500/40 w-72 rounded-2xl">
                          <Image
                            alt="John"
                            src={`/johns.png`}
                            fill="true"
                            className="rounded-2xl"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="relative aspect-[9/10] flex-none bg-black/50 shadow-lg shadow-sky-600/40 w-72 rounded-2xl rotate-3">
                          <Image
                            alt="Jane"
                            src={`/janes.png`}
                            fill="true"
                            className="rounded-2xl"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="relative aspect-[9/10] flex-none bg-black/50 shadow-lg shadow-sky-600/40 w-72 rounded-2xl -rotate-3">
                          <Image
                            alt="John"
                            src={`/johns.png`}
                            fill="true"
                            className="rounded-2xl"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-[1] h-screen w-screen">
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
              <h1 className="font-extrabold text-center mb-10 text-4xl md:text-5xl p-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
                Credits
              </h1>
            </div>
          </section>

        </div>
      </main >
    </>
  )
}
