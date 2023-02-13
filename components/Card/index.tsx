import Image from 'next/image'
import removeTags from '../Html_Remove_Tage'
import { dateFormatTime } from '../Format_Date'
import Link from 'next/link'

const Card = ({
    img,
    title,
    des,
    date,
    auth,
    uri
}: { img: string, title: string, des: string, date: string, auth: string, uri: string }) => {
    return (
        <>
            <div className='py-2'>
                <div className='grid grid-cols-2 border-2 rounded-sm '>
                    <div className=' min-[740px]:col-span-1 col-span-2 relative group transition duration-300 delay-150 ease transform hover:cursor-pointer overflow-hidden'>
                        <Link href={`/${uri}`}>
                            <Image
                                // @ts-ignore
                                src={img}
                                width={640}
                                height={336}
                                sizes="100vwb"
                                // @ts-ignore
                                alt={img}
                                className='object-center object-cover aspect-[19/9] h-full w-full relative group-hover:scale-105 transition duration-300 delay-150 ease transform '
                            />
                        </Link>
                    </div>
                    <div className='bg-white p-3 md:p-3 sm:p-2  min-[740px]:col-span-1 col-span-2 '>
                        <Link href={`/${uri}`}>
                            <h1 className=' text-black font-bold hover:text-red-600 lg:text-lg md:text-lg text-xl line-clamp-2'>{title}</h1>
                        </Link>
                        <div className='py-2'>
                            <div className="flex space-x-4">
                                <div className="flex space-x-1">
                                    <i className="fa-regular fa-user text-[13px] mt-0.5 dateconcolor "></i>
                                    <span className="dateconcolor text-[13px]  capitalize">{auth}</span>
                                </div>
                                <div className="flex space-x-1">
                                    <i className="fa-solid fa-calendar-days dateconcolor text-[13px] mt-0.5"></i>
                                    <span className=' text-[13px] dateconcolor'>{dateFormatTime(date)}</span>
                                </div>
                            </div>
                            <hr className="my-2 h-px w-[98%] bg-gray-200 border-0 dark:bg-gray-700 "></hr>
                        </div>
                        <span className=" line-clamp-3 normal-case text-gray-700" dangerouslySetInnerHTML={{ __html: removeTags(des) }}>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card