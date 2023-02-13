import { FluffyEdge } from "../../Types/globals-types"

function Plugin({ data_Plugin }: { data_Plugin: FluffyEdge }) {
  return (
    <div className="mt-0.5">
      <iframe
        // @ts-ignore 
        src={data_Plugin.node.template.link.link}
        height="35"
        className="p-2 w-[155px]"
        style={{ border: '0', overflow: 'hidden' }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </div>


  )
}

export default Plugin