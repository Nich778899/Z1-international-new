import { FluffyEdge } from "../../Types/globals-types"

function About_News({data_About_news}:{data_About_news:FluffyEdge}) {
    
    return (
        <div>
            <div className="w-full relative">
                <h1 className="text-xl border-b-2 dark:bg-gray-700 py-2 before:bg-[#d4010e] before:absolute before:w-[50px] before:h-[3px] before:bottom-0">About News</h1>
            </div>
            <div className='mt-6 text-gray-300'>
                {data_About_news.node.children.edges.map((item: any)=>(
                  <h1 key={item.node.title}>{item.node.title}</h1>
                ))}   
            </div>
        </div>
    )
}

export default About_News