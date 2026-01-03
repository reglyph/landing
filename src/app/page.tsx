import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex p-4 items-center justify-center h-screen w-full xl:space-y-[128px] space-y-[64px] flex-col">
        <div className={'flex flex-col items-center'}>
          <span className={'text-grayish-400 text-md'}>{'// UI-kit //'}</span>
          <Image src={'/logo-red.svg'} alt={'logo'} width={240} height={100} />
        </div>

        <div className={'flex flex-col gap-2.5 items-center'}>
          <div className={'flex gap-2 sm:flex-row flex-col w-full'}>
            <div
              className={
                'p-4 group border hover:border-redish active:border-redish  duration-400 transition border-grayish-400 flex flex-col justify-between items-stretch sm:w-[256px] w-full sm:h-[256px] h-[140px] relative'
              }
            >
              <span
                className={
                  'w-[8px] h-[8px] opacity-0 group-active:opacity-100 group-hover:opacity-100 transition absolute border border-redish bg-white z-10 top-[-4px] left-[-4px]'
                }
              ></span>
              <span
                className={
                  'w-[8px] h-[8px] opacity-0 group-active:opacity-100 group-hover:opacity-100 transition absolute border border-redish bg-white z-10 bottom-[-4px] right-[-4px]'
                }
              ></span>
              <span
                className={
                  'w-[8px] h-[8px] opacity-0 group-active:opacity-100 group-hover:opacity-100 transition absolute border border-redish bg-white z-10 bottom-[-4px] left-[-4px]'
                }
              ></span>
              <span
                className={
                  'w-[8px] h-[8px] opacity-0 group-active:opacity-100 group-hover:opacity-100 transition absolute border border-redish bg-white z-10 top-[-4px] right-[-4px]'
                }
              ></span>
              <span
                className={
                  'group-hover:text-white group-active:text-white text-grayish-400 transition duration-400 text-md font-normal'
                }
              >
                WORK IN PROGRESS
              </span>
              <div className={'text-white flex flex-col gap-2.5 items-end'}>
                <div className={'flex flex-col items-end'}>
                  <span className={'text-grayish-400 text-xs'}>GITHUB</span>
                  <a
                    className={
                      'transition hover:bg-redish active:bg-redish duration-400 group-hover:text-white group-active:text-white text-grayish-400'
                    }
                    href={'https://github.com/reglyph'}
                    target={'_blank'}
                  >
                    GITHUB.COM/REGLYPH
                  </a>
                </div>

                <small className={'text-grayish-200 text-xs'}>
                  --- SEE OUR PROGRESS HERE
                </small>
              </div>
            </div>

            <div
              className={
                'p-4 group border hover:border-redish active:border-redish hover:border-solid duration-400 transition border-grayish-400 flex flex-col justify-between items-stretch sm:w-[256px] w-full sm:h-[256px] h-[140px] relative'
              }
            >
              <span
                className={
                  'w-[8px] h-[8px] group-active:opacity-100 opacity-0 group-hover:opacity-100 transition absolute border border-redish bg-white z-10 top-[-4px] left-[-4px]'
                }
              ></span>
              <span
                className={
                  'w-[8px] h-[8px] group-active:opacity-100 opacity-0  group-hover:opacity-100 transition absolute border border-redish bg-white z-10 bottom-[-4px] right-[-4px]'
                }
              ></span>
              <span
                className={
                  'w-[8px] h-[8px] group-active:opacity-100 opacity-0 group-hover:opacity-100 transition absolute border border-redish bg-white z-10 bottom-[-4px] left-[-4px]'
                }
              ></span>
              <span
                className={
                  'w-[8px] h-[8px] group-active:opacity-100 opacity-0 group-hover:opacity-100 transition absolute border border-redish bg-white z-10 top-[-4px] right-[-4px]'
                }
              ></span>

              <span
                className={
                  'text-grayish-400 duration-400 group-hover:text-white group-active:text-white text-md font-normal'
                }
              >
                CONTACT US
              </span>
              <div className={'text-white flex flex-col gap-2.5 items-end'}>
                <div className={'flex flex-col items-end'}>
                  <span className={'text-grayish-400 text-xs'}>MAIL</span>
                  <a
                    className={
                      'transition text-grayish-400 group-hover:text-white group-active:text-white hover:bg-redish active:bg-redish duration-400'
                    }
                    href={'mailto:hello@reglyph.dev'}
                    target={'_blank'}
                  >
                    HELLO@REGLYPH.DEV
                  </a>
                </div>

                <small className={'text-grayish-200 text-xs'}>
                  {'///// WE KNOW YOU NEED THIS'}
                </small>
              </div>
            </div>
          </div>

          <a
            className={
              'w-full bg-white p-2.5 hover:bg-redish active:text-white active:bg-redish hover:text-white text-black duration-400 transition cursor-pointer justify-center flex'
            }
            href="https://t.me/furiesd"
            target={'_blank'}
          >
            <span className={'text-center'}>
              Want to make this shit with us?
            </span>
          </a>
        </div>

        <small className={'text-grayish-400 text-xs absolute bottom-5'}>
          (c) Reglyph Team, 2026
        </small>
      </div>
    </>
  );
}
