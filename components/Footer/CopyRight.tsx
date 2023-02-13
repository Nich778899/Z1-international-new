import { FluffyEdge } from "../../Types/globals-types";
import removeTags from "../Html_Remove_Tage";

function CopyRight({ data_copyright, data_menu_footer }:{data_menu_footer: FluffyEdge,data_copyright:FluffyEdge}) {


    return (
        <div className="bg-[#212529]  w-full py-5">
            <div className="lg:w-[1320px] w-full mx-auto px-5 flex justify-between flex-wrap">
                <div className="md:w-[50%] w-full text-gray-300 hover:text-white" >
                    {data_copyright.node.children.edges.map((item) => (
                        // @ts-ignore 
                        <h1 className="md:text-start text-center" key={item.node.title}>{item.node.title}</h1>
                    ))}
                </div>
                <div className="md:w-[50%] md:mt-0 mt-2 w-full flex md:justify-end justify-center text-white">
                    {data_menu_footer.node.children.edges.map((item, index) => (
                        // @ts-ignore 
                        <a href={item.node.template.link.link} target="_blank" rel="noopener noreferrer" key={item.node.title}>
                            <h1 className={`px-2 py-0  text-gray-300 hover:text-white ${index > 0 && 'border-l-2 border-l-white'}`}>{item.node.title}</h1>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CopyRight