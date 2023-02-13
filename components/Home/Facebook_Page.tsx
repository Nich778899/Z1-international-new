import { AllPostsNode } from "../../Types/globals-types"

function Facebook_Page({data_Facebook}: { data_Facebook: AllPostsNode[] }) {
    return (
        <div>
            <div className='bg-[#f8f9fa] min-[450px]:mt-4 '>
                <div className='Popular_post'>
                    <h1 className='  text-white text-left ml-6 p-2 text-lg font-semibold'>FACEBOOK PAGE</h1>
                </div>
                <hr className="  w-full h-1  bg-[#d4010e] rounded border-0 "></hr>
            </div>
            <div className='mt-2 h-[280px]'>
                <iframe
                    // @ts-ignore
                    src={data_Facebook[0]?.template?.link?.link}
                    width="417"
                    height="500"
                    style={{ border: '0', overflow: 'hidden' }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
        </div>
    )
}
export default Facebook_Page
