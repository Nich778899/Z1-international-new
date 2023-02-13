import dynamic from 'next/dynamic';
import { AllPostsNode } from '../../Types/globals-types';

function Video({ data_Video }: { data_Video: AllPostsNode[] }) {
    
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
    return (
        <div>
            <div className='bg-[#f8f9fa] '>
                <div className='facebookpage'>
                    <h1 className='  text-white text-left ml-8 p-2 text-lg font-semibold'>VIDEO</h1>
                </div>
                <hr className="  w-full h-1  bg-[#d4010e] rounded border-0 "></hr>
            </div>
            <div className=" mt-2  ">
                <ReactPlayer
                    // @ts-ignore
                    url={data_Video[0].template?.link?.link}
                    width='100%'
                    height='100%'
                    // @ts-ignore
                    alt={data_Video[0].template?.link?.link}
                    controls
                />
            </div>
        </div>
    )
}

export default Video