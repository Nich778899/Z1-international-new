import Image from "next/image"
import { IndigoNode} from "../../Types/globals-types"
import Link from "next/link"

function ImageBanner({ Data_ImageBanner }: { Data_ImageBanner?: IndigoNode }) {
  
  return (
    <div className="w-full bg-white">
    {/* @ts-ignore */}
      <Link href={"/"} rel="noopener noreferrer">
        <Image
          // @ts-ignore 
          src={Data_ImageBanner?.featuredImage?.node?.sourceUrl}
          width={416}
          height={119}
          sizes="100vwb"
          alt="logo"
          className="w-full object-fill"
        />
      </Link>
    </div>
  )
}

export default ImageBanner
