
import Image from "next/image"
import { AllPostsNode } from "../../Types/globals-types"
import Link from "next/link"

function Recent_Post({ data_Recent_Post }: { data_Recent_Post: AllPostsNode[] }) {

    return (
        <div>
            <div className="w-full relative">
                <h1 className="text-xl border-b-2 dark:bg-gray-700 py-2 before:bg-[#d4010e] before:absolute before:w-[50px] before:h-[3px] before:bottom-0">Recent Posts</h1>
            </div>
            <div className='grid grid-rows-4 mt-6 w-full '>
            {data_Recent_Post.map((item, index) => (
                    // @ts-ignore 
                    <div key={item?.featuredImage?.node?.sourceUrl}>
                        <Link href={item.slug}>

                            <div className='grid grid-cols-8 md:grid-cols-6 gap-2'>
                                <div className='col-span-3 min-[450px]:col-span-2 min-[440px]:col-span-1 md:col-span-2 space-x-2 mt-2'>
                                    <Image
                                        // @ts-ignore 
                                        src={item.featuredImage?.node?.sourceUrl}
                                        width={130}
                                        height={57}
                                        sizes="100vwb"
                                        // @ts-ignore 
                                        alt={item?.featuredImage?.node?.altText}
                                        className='object-cover  relative group-hover:scale-105 transition duration-300 delay-150 ease transform '
                                    />
                                </div>
                                <div className='col-span-5 min-[450px]:col-span-6 min-[440px]:col-span-7 md:col-span-4 '>
                                    {/* @ts-ignore */}
                                    <h1 className='text-sm text-start text-gray-300  hover:text-white mt-1 '>{item.title}</h1>
                                </div>
                            </div>
                        </Link>
                        {
                            (index < data_Recent_Post.slice(0, 4).length - 1) && <hr className="mt-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recent_Post