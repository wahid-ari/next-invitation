import { useEffect, useState } from 'react';
import { Gradient } from '@components/Gradient';
import { ClockIcon } from '@heroicons/react/24/outline';
import { supabase } from '@utils/supabase';
import { motion } from 'framer-motion';
import moment, { updateLocale } from 'moment';

export default function Comment() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [come, setCome] = useState('');
  const [fetched, setFetched] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [commentData, setCommentData] = useState([]);
  const gusetCome = commentData.filter((item) => item.come == 1);
  const gusetNotCome = commentData.filter((item) => item.come == 2);
  const gusetNotSure = commentData.filter((item) => item.come == 3);

  useEffect(() => {
    if (!fetched) getComments();
  }, [fetched]);

  async function getComments() {
    const { data } = await supabase.from('invitation_comment').select().order('id', { ascending: false });
    setCommentData(data);
    setFetched(true);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsSubmiting(true);
    const { error } = await supabase.from('invitation_comment').insert([
      {
        name: name,
        comment: comment,
        come: 0,
      },
    ]);
    if (!error) {
      setFetched(false);
      setName('');
      setComment('');
      setCome('');
    }
    setIsSubmiting(false);
  }

  return (
    <div className='relative min-h-screen overflow-hidden bg-black'>
      <Gradient width={1000} height={800} className='z-[2] rotate-90 opacity-10' conic />
      <Gradient width={1000} height={400} className='t-0 -right-64 z-[2] -rotate-90 opacity-10' conic />
      <Ornament />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0 flex justify-center'>
        <div className='grid h-full min-h-screen w-full grid-cols-3 gap-3.5 px-4 sm:grid-cols-4 md:grid-cols-5'>
          <div className='h-full w-full rounded-md border-2 border-dashed border-black bg-gradient-to-br from-sky-600/20 via-green-600/20 to-yellow-600/20 px-[1.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md border-2 border-dashed border-black bg-gradient-to-br from-yellow-600/20 via-blue-600/20 to-green-600/20 px-[1.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md border-2 border-dashed border-black bg-gradient-to-br from-green-600/20 via-yellow-600/20 to-blue-600/20 px-[1.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='hidden h-full w-full rounded-md border-2 border-dashed border-black bg-gradient-to-br from-green-600/20 via-yellow-600/20 to-blue-600/20 px-[1.5px] sm:block'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='hidden h-full w-full rounded-md border-2 border-dashed border-black bg-gradient-to-br from-blue-600/20 via-yellow-600/20 to-green-600/20 px-[1.5px] md:block'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          {/* <div className='h-full w-full rounded-md bg-gradient-to-br from-neutral-600/20 via-neutral-600/20 to-neutral-600/20 px-[0.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md bg-gradient-to-br from-neutral-600/20 via-neutral-600/20 to-neutral-600/20 px-[0.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md bg-gradient-to-br from-neutral-600/20 via-neutral-600/20 to-neutral-600/20 px-[0.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='hidden h-full w-full rounded-md bg-gradient-to-br from-neutral-600/20 via-neutral-600/20 to-neutral-600/20 px-[0.5px] sm:block'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='hidden h-full w-full rounded-md bg-gradient-to-br from-neutral-600/20 via-neutral-600/20 to-neutral-600/20 px-[0.5px] md:block'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div> */}
        </div>
      </div>
      <div className='pointer-events-none absolute inset-x-0 z-0 flex justify-center'>
        <div className='grid h-full min-h-screen w-full grid-flow-col grid-rows-3 gap-3.5 py-4'>
          <div className='border-b-2 border-t-2 border-dashed border-b-green-600/20 border-t-yellow-600/20'></div>
          <div className='border-b-2 border-t-2 border-dashed border-b-yellow-600/20 border-t-sky-600/20'></div>
          <div className='border-b-2 border-t-2 border-dashed border-b-green-600/20 border-t-sky-600/20'></div>
          {/* <div className='border-b border-t border-b-neutral-600/20 border-t-neutral-600/20'></div>
          <div className='border-b border-t border-b-neutral-600/20 border-t-neutral-600/20'></div>
          <div className='border-b border-t border-b-neutral-600/20 border-t-neutral-600/20'></div> */}
        </div>
      </div>
      <div className='relative z-[10] mx-auto max-w-xl items-center gap-1.5 p-4'>
        {/* <form>
        <div className="h-10 w-full rounded-md bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 p-0.5">
          <div className="flex h-full w-full items-center justify-center bg-transparent">
            <input type="text" name="name" placeholder="Name" required className="flex h-full w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:border-neutral-600 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900" />
          </div>
        </div>
        <div className="my-4 min-h-[80px] w-full rounded-md bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 p-0.5">
          <div className="flex h-full w-full items-center justify-center bg-transparent">
            <textarea type="text" name="comment" placeholder="Comment" required className="flex min-h-[80px] w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:border-neutral-600 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900" />
          </div>
        </div>
        <div className="h-10 w-full rounded-md bg-gradient-to-r from-sky-500 via-green-500 to-yellow-500 p-0.5">
          <div className="flex h-full w-full items-center justify-center bg-transparent">
            <select className="flex invalid:text-gray-500 h-full cursor-pointer w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:border-neutral-600 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900">
              <option value="" disabled selected>Come ?</option>
              <option value="1">come</option>
              <option value="2">not come</option>
              <option value="3">not sure</option>
            </select>
          </div>
        </div>
      </form> */}

        {/* {fetched && commentData ? (
          <div className='justify-betwee grid grid-cols-3 divide-x divide-neutral-700 rounded border border-neutral-700'>
            <div className='px-3 py-1'>
              <p className='bg-gradient-to-b from-green-500 to-sky-500 bg-clip-text text-center text-3xl font-bold text-transparent'>
                {gusetCome.length}
              </p>
              <p className='text-center text-base text-neutral-200'>Come</p>
            </div>
            <div className='px-3 py-1'>
              <p className='bg-gradient-to-b from-red-500 to-indigo-500 bg-clip-text text-center text-3xl font-bold text-transparent'>
                {gusetNotCome.length}
              </p>
              <p className='text-center text-base text-neutral-200'>Not Come</p>
            </div>
            <div className='px-3 py-1'>
              <p className='bg-gradient-to-b from-yellow-500 to-orange-500 bg-clip-text text-center text-3xl font-bold text-transparent'>
                {gusetNotSure.length}
              </p>
              <p className='text-center text-base text-neutral-200'>Not Sure</p>
            </div>
          </div>
        ) : null} */}

        <form className='' onSubmit={onSubmit}>
          <div className='rotate-border rotate-border-1 relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              name='name'
              placeholder='Name'
              required
              className='relative z-10 flex h-full w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-600 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900'
            />
          </div>
          <div className='rotate-border rotate-border-2 relative mt-4 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              type='text'
              value={comment}
              name='comment'
              placeholder='Comment'
              required
              className='z-10 flex min-h-[100px] w-full rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:border-neutral-600 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900'
            />
          </div>
          {/* <div className='rotate-border rotate-border-3 relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
            <select
              value={come}
              onChange={(e) => setCome(e.target.value)}
              required
              className='z-10 flex h-full w-full cursor-pointer rounded-md border border-neutral-600 bg-black px-3 py-2 text-sm placeholder:text-neutral-500 invalid:text-neutral-400 focus-visible:border-neutral-600 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900'
            >
              <option value='' disabled selected>
                Come ?
              </option>
              <option value='1'>come</option>
              <option value='2'>not come</option>
              <option value='3'>not sure</option>
            </select>
          </div> */}
          {/* <div className='mt-4 h-8 w-24 rounded-md bg-gradient-to-r from-sky-500 p-[0.5px] via-yellow-500 to-green-500'>
            <div className='flex h-full items-center justify-center bg-black'>
              <button
                disabled={isSubmiting}
                type='submit'
                name='submit'
                className='flex items-center gap-2 text-sm font-medium disabled:cursor-not-allowed'
              >
                {isSubmiting &&
                  <svg
                    className='h-5 w-5 animate-spin text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                }
                Submit
              </button>
            </div>
          </div> */}
          <button
            disabled={isSubmiting}
            type='submit'
            name='submit'
            className='group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600 via-green-500 to-sky-500 p-0.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:ring-offset-1 focus-visible:ring-offset-black disabled:cursor-not-allowed group-hover:from-yellow-600 group-hover:via-green-600 group-hover:to-sky-500'
          >
            <span className='relative flex gap-2 rounded-md bg-black px-4 py-1.5 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
              {isSubmiting && (
                <svg
                  className='h-5 w-5 animate-spin text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
              Submit
            </span>
          </button>
        </form>
        {fetched && commentData.length > 0 ? (
          <BorderFrame>
            <div className='scrollbar-thumb-rounded mt-12 h-72 overflow-auto px-4 py-2 scrollbar-thin'>
              {commentData.map((data, index) => (
                <div key={data.id} className='mb-3'>
                  <p className='text-[17px] font-medium text-sky-500'>{data.name}</p>
                  {/* <p className='font-medium bg-gradient-to-r from-green-500 via-orange-500 to-sky-500 bg-clip-text text-transparent'>{data.name}</p> */}
                  <p className='text-neutral-200'>{data.comment}</p>
                  <p className='mt-1 flex items-center gap-1 text-[13px] text-neutral-400'>
                    <ClockIcon className='h-4 w-4' />
                    {moment(new Date(data.created_at)).fromNow(
                      updateLocale('en', {
                        relativeTime: {
                          future: 'in %s',
                          past: '%s ',
                          s: 'sec',
                          m: '%d menit lalu',
                          mm: '%d menit lalu',
                          h: '%d jam lalu',
                          hh: '%d jam lalu',
                          d: '%d hari lalu',
                          dd: '%d hari lalu',
                          M: 'a mth',
                          MM: '%d mths',
                          y: 'y',
                          yy: '%d y',
                        },
                      }),
                    )}
                  </p>
                  {/* {index < commentData.length - 1 && <div className='mt-4 border-b border-b-neutral-800' />} */}
                </div>
              ))}
            </div>
          </BorderFrame>
        ) : fetched && commentData.length == 0 ? (
          <BorderFrame>
            <p className='mt-12 px-4 py-2'>No comment found.</p>
          </BorderFrame>
        ) : (
          <BorderFrame>
            <p className='mt-12 px-4 py-2'>Loading comment...</p>
          </BorderFrame>
        )}
      </div>
    </div>
  );
}

function BorderFrame({ children }) {
  return (
    <div className='relative'>
      <div className='absolute -inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent sm:-inset-x-10 md:-inset-x-24 lg:-inset-x-56 xl:-inset-x-96' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to right, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-x-0 -top-[15px] h-px sm:-inset-x-12 md:-inset-x-16'
      /> */}
      <div className='absolute -inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent sm:-inset-x-10 md:-inset-x-24 lg:-inset-x-56 xl:-inset-x-96' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to right, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-x-0 -bottom-[15px] h-px sm:-inset-x-12 md:-inset-x-16'
      /> */}
      <div className='absolute -inset-y-24 left-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-y-16 -left-[15px] w-px'
      /> */}
      <div className='absolute -inset-y-24 right-0 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent' />
      {/* <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
        }}
        className='absolute -inset-y-16 -right-[15px] w-px'
      /> */}
      {children}
    </div>
  );
}

function Ornament() {
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
  return (
    <>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute top-48 z-10 md:left-14'
      >
        <motion.circle
          cx='100'
          cy='100'
          r='80'
          className='fill-transparent stroke-yellow-500/40'
          variants={draw}
          custom={1}
        />
      </motion.svg>

      <motion.svg
        width='100'
        height='100'
        viewBox='0 0 200 200'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute bottom-8 right-32 z-10 md:right-12'
      >
        <motion.circle
          cx='100'
          cy='100'
          r='80'
          className='fill-transparent stroke-yellow-500/30'
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
        className='absolute left-40 top-32 z-10'
      >
        <motion.rect
          width='140'
          height='140'
          x='410'
          y='30'
          rx='20'
          className='fill-transparent stroke-sky-500/40 stroke-1'
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
        className='absolute right-32 top-32 z-10'
      >
        <motion.rect
          width='140'
          height='140'
          x='410'
          y='30'
          rx='20'
          className='fill-transparent stroke-sky-500/40 stroke-1'
          variants={draw}
          custom={3}
        />
      </motion.svg>
      <motion.svg
        width='400'
        height='400'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute -bottom-40 z-10 md:-left-32'
      >
        <motion.rect
          width='140'
          height='140'
          x='410'
          y='30'
          rx='20'
          className='fill-transparent stroke-sky-500/30 stroke-1'
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
        className='absolute -right-8 top-32 z-10'
      >
        <motion.circle
          cx='100'
          cy='100'
          r='50'
          className='fill-transparent stroke-yellow-500/40'
          variants={draw}
          custom={1}
        />
      </motion.svg>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 800 800'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute right-8 top-64 z-10 md:right-64'
      >
        <motion.line x1='220' y1='30' x2='360' y2='170' className='stroke-yellow-500/40' variants={draw} custom={2} />
        <motion.line x1='220' y1='170' x2='360' y2='30' className='stroke-sky-500/40' variants={draw} custom={2.5} />
      </motion.svg>
      <motion.svg
        width='200'
        height='200'
        viewBox='0 0 600 600'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute bottom-0 left-8 z-10'
      >
        <motion.line x1='220' y1='30' x2='360' y2='170' className='stroke-yellow-500/40' variants={draw} custom={2} />
        <motion.line x1='220' y1='170' x2='360' y2='30' className='stroke-sky-500/40' variants={draw} custom={2.5} />
      </motion.svg>
    </>
  );
}
