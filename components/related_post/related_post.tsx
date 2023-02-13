import Image from "next/image"
import Link from "next/link"


function Relatedpost({relatedpost}: any) {
    if(!relatedpost) {
        return <h1></h1>
    }else
    return (
        <div>
            <div className="py-12 ">
                <div className='bg-[#f8f9fa] min-[450px]:-mt-4 '>
                    <div className='Popular_post'>
                        <h1 className='  text-white  text-center p-2 text-lg font-semibold uppercase'>Related post</h1>
                    </div>
                    <hr className="  w-full h-1  bg-[#d4010e] rounded border-0 "></hr>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-2 '>
                   {relatedpost.category.posts.nodes.slice(19, 25).map((item: any)=>(               
                // eslint-disable-next-line react/jsx-key
                   <div>
                       <div className='lg:col-span-1 min-[740px]:col-span-2 col-span-4 relative group transition duration-300 delay-150 ease transform hover:cursor-pointer overflow-hidden'>
                        <Image
                            // @ts-ignore
                            src={item.featuredImage.node.sourceUrl}
                            width={250}
                            height={175}
                            alt="logo"
                            className='h-full w-full rel group-hover:scale-105 transition duration-300 delay-150 ease transform' />
                        <div className='absolute top-0 flex flex-row flex-wrap gap-[0.5px]'>
                            {item.categories.nodes.map((item: any) =>(
                                // eslint-disable-next-line react/jsx-key
                                <Link href={`category/${item.slug}`} >
                            <h1 className='bg-[#d4010e] hover:bg-black text-white w-auto h-4 text-xs text-center px-1 border-l border-l-gray-800  '>{item.name}</h1>
                            </Link>
                                ))}
                        </div>
                    <span className="text-sm text-black hover:text-red-600 mt-2 font-bold leading-4 line-clamp-3">{item.title}</span>
                    </div>
                   </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Relatedpost