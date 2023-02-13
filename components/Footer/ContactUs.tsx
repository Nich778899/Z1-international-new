import { FluffyEdge } from "../../Types/globals-types"

function ContactUs({ data_ContactUs }: { data_ContactUs: FluffyEdge }) {

    return (
        <div>
            <div className="w-full relative">
                <h1 className="text-xl border-b-2 dark:bg-gray-700 py-2 before:bg-[#d4010e] before:absolute before:w-[50px] before:h-[3px] before:bottom-0">Contact Us</h1>
            </div>
            <div className='text-gray-300'>
                <h1 className='mt-6 text-lg '>Address</h1>
                <div className='mt-2 '>
                    {data_ContactUs.node.children.edges.map((item) => (
                        // @ts-ignore 
                        <a href={item.node.template.link.link} key={item.node.template.custom_icon.icon} target="_blank" rel="noopener noreferrer">
                            <div className='flex space-x-2 p-1 cursor-pointer text-gray-300  hover:text-white'>
                                {/* @ts-ignore */}
                                <i className={`${item.node.template.custom_icon.icon} headericon mt-0.5 inline-block text-gray-300  hover:text-white`}></i>
                                {
                                    // @ts-ignore 
                                    (item.node.title != 'Address') && <span className='text-[15px]'>{item.node.title}</span>
                                }
                                {/* @ts-ignore */}
                                <p className=" inline-block " dangerouslySetInnerHTML={{ __html: item?.node?.content || '' }} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs