import Image from 'next/image'
import moment from 'moment'
import { AllPostsNode } from '../../Types/globals-types'
import { dateFormatTime } from '../Format_Date'

function Popular_Post({ data_Popular_post }: { data_Popular_post: AllPostsNode[] }) {


    return (
        <div>
            <div className='bg-[#f8f9fa] min-[450px]:-mt-4 '>
                <div className='Popular_post'>
                    <h1 className='  text-white text-left ml-6 p-2 text-lg font-semibold'>POPULAR POSTS</h1>
                </div>
                <hr className="  w-full h-1  bg-[#d4010e] rounded border-0 "></hr>
            </div>
            <div className='grid grid-rows-4 mt-2 w-full h-max '>
                {data_Popular_post?.map((item, index: any) => (
                    // @ts-ignore
                    <div key={item.featuredImage?.node?.sourceUrl}>
                        <div className='grid grid-cols-8 md:grid-cols-6 gap-2'>
                            <div className='col-span-3 min-[450px]:col-span-2 min-[440px]:col-span-1 md:col-span-2'>
                                <Image
                                    // @ts-ignore
                                    src={item.featuredImage?.node?.sourceUrl}
                                    width={130}
                                    height={57}
                                    sizes="100vwb"
                                    // @ts-ignore
                                    alt={item.featuredImage?.node?.sourceUrl}
                                    className='object-cover  relative group-hover:scale-105 transition duration-300 delay-150 ease transform '
                                />
                            </div>
                            <div className='col-span-5 min-[450px]:col-span-6 min-[440px]:col-span-7 md:col-span-4 '>
                                {/* @ts-ignore */}
                                <a href={item.template?.link?.link} rel="noopener noreferrer">
                                    <h1 className='text-sm text-start text-black font-bold hover:text-red-600  '>{item.title}</h1>
                                </a>
                                <div className='ml-0 flex space-x-1 mt-1'>
                                    <i className="fa-solid fa-calendar-days dateconcolor text-xs mt-1"></i>
                                    <span className='text-xs'>{dateFormatTime(item.date )}</span>
                                </div>
                            </div>
                        </div>
                        {
                            (index < data_Popular_post.slice(0, 4).length - 1) && <hr className="mt-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular_Post