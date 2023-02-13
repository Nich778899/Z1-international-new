import Image from "next/image";
import { AllPostsNode, CategoriesNode } from "../../Types/globals-types";
import {dateFormat} from "../Format_Date";
import removeTags from "../Html_Remove_Tage";
import Link from "next/link";

const CategoryGrid = ({ category }: { category: AllPostsNode[] }) => {
    
    return (
        <div className='w-full mt-4'>
            <div className='grid grid-cols-2'>
                <div className=' grid grid-cols-2 col-span-2'>
                    <div className=' min-[740px]:col-span-1 col-span-2 relative group transition duration-300 delay-150 ease transform hover:cursor-pointer overflow-hidden'>
                        <Link  href={category[0].slug}>
                            <Image
                                // @ts-ignore
                                src={category[0].featuredImage.node.sourceUrl}
                                width={640}
                                height={336}
                                // @ts-ignore
                                alt={category[0].featuredImage.node.title}
                                className='object-cover h-full w-full relative group-hover:scale-105 transition duration-300 delay-150 ease transform '
                            />
                        </Link>
                    </div>
                    <div className='bg-[#f8f9fa] lg:p-6 md:p-6 p-4  min-[740px]:col-span-1 col-span-2'>
                        <Link href={category[0].slug} >
                        <h1 className=' text-black font-bold hover:text-red-600 lg:text-lg md:text-lg text-xl line-clamp-2 '>{category[0].title}</h1>
                        </Link>
                        <div className="py-2">
                        <hr className="mr-[396px] -mb-2 mx-auto w-12 h-1  bg-[#d4010e] rounded border-0 "></hr>
                        <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700 "></hr>
                        </div>
                        <div className='flex space-x-1  h-8'>
                            <i className="fa-solid fa-calendar-days dateconcolor text-xs mt-0.5"></i>
                            <span className='text-slate-400 text-xs '>{dateFormat(category[0].date)}</span>
                            {category[0].categories?.nodes?.map((item: CategoriesNode, index: number) => (
                                <span key={index} className='bg-[#d4010e] hover:bg-black text-white w-[75px] h-4 text-xs text-center px-1 '>{item.name}</span>
                            ))}
                        </div>
                        <div className=' mt-4 line-clamp-4 normal-case '
                            dangerouslySetInnerHTML={{ __html: removeTags(category[0].content) }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-4 '>
                {category.slice(1, 5).map((item: AllPostsNode) => (
                    // @ts-ignore
                    <div key={item.featuredImage.node.title} className='lg:col-span-1 min-[740px]:col-span-2 col-span-4 relative group transition duration-300 delay-150 ease transform hover:cursor-pointer overflow-hidden'>
                        <Link  href={category[0].slug}>
                            <Image
                                // @ts-ignore
                                src={item.featuredImage.node.sourceUrl}
                                width={202}
                                height={120}
                                // @ts-ignore
                                alt={item.featuredImage.node.title}
                                className='object-center object-cover aspect-[19/10]  min-w-full relative group-hover:scale-105 transition duration-300 delay-150 ease transform z-[1000] md:w-full'
                            />
                            <h1 className='text-sm text-black font-bold hover:text-red-600 mt-2 leading-4 '>{item.title}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryGrid;