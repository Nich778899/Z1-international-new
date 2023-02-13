import { FluffyEdge } from "../../Types/globals-types"


function Contact({data_contact}: {data_contact: FluffyEdge}) { 
  return (
    <div className="flex flex-row text-white ml-auto text-xs cursor-pointer">
      {data_contact.node.children.edges.slice(1,3).map((item) => (
        // @ts-ignore 
        <div key={item.node.template.custom_icon.icon} className="whitespace-pre group h-10 flex items-center justify-center border-l border-l-gray-400 px-2">
          <div className="w-4 h-4 mx-2">
             {/* @ts-ignore  */}
          <i className={`${item.node.template.custom_icon.icon} headericon`}></i>
          </div>
          <span className="text-white group-hover:text-gray-300 ">{item.node.title}</span>
          <div className="text-white ml-1 flex group-hover:text-gray-300 " dangerouslySetInnerHTML={{ __html: item?.node?.content||'' }} />
        </div>
      ))}
    </div>
  )
}

export default Contact