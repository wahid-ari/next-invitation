import { useEffect, useState } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { supabase } from '@utils/supabase';
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
        come: parseInt(come),
      },
    ]);
    console.log(error);
    if (!error) {
      setFetched(false);
      setName('');
      setComment('');
      setCome('');
    }
    setIsSubmiting(false);
  }

  return (
    <div className='relative bg-black'>
      <div className='pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0 flex justify-center'>
        <div className='grid h-full min-h-screen w-full grid-cols-3 gap-3.5 px-4 sm:grid-cols-4'>
          <div className='h-full w-full rounded-md bg-gradient-to-br from-sky-500/20 via-green-500/20 to-yellow-500/20 px-[0.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md bg-gradient-to-br from-yellow-500/20 via-blue-500/20 to-green-500/20 px-[0.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='h-full w-full rounded-md bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-blue-500/20 px-[0.5px]'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
          <div className='hidden h-full w-full rounded-md bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-blue-500/20 px-[0.5px] sm:block'>
            <div className='flex h-full w-full items-center justify-center bg-black'></div>
          </div>
        </div>
      </div>
      <div className='pointer-events-none absolute inset-x-0 z-0 flex justify-center'>
        <div className='grid h-full min-h-screen w-full grid-flow-col grid-rows-3 gap-3.5 py-4'>
          <div className='border-b border-t border-b-green-500/20 border-t-yellow-500/20'></div>
          <div className='border-b border-t border-b-yellow-500/20 border-t-sky-500/20'></div>
          <div className='border-b border-t border-b-green-500/20 border-t-sky-500/20'></div>
        </div>
      </div>
      <div className='relative z-[1] mx-auto max-w-xl items-center gap-1.5 p-8'>
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

        <form className='mt-8' onSubmit={onSubmit}>
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
          <div className='rotate-border rotate-border-2 relative my-4 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
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
          <div className='rotate-border rotate-border-3 relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent p-0.5'>
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
          </div>
          <div className='mt-4 h-8 w-20 rounded-md bg-gradient-to-r from-sky-500 to-green-500'>
            <div className='flex h-full items-center justify-center bg-transparent'>
              <button
                disabled={isSubmiting}
                type='submit'
                name='submit'
                className='text-sm font-medium disabled:cursor-not-allowed'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {fetched && commentData ? (
          <div className='overflow-aut scrollbar-thumb-rounded mt-8 h-72 scrollbar-thin'>
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
        ) : null}
      </div>
    </div>
  );
}
