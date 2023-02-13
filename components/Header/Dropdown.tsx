import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image';
import { FluffyEdge } from '../../Types/globals-types';

function Dropdown({ data_dropDown }: { data_dropDown: FluffyEdge }) {
  const [indexLanguage, setIndexLanguage] = useState(0);
  const [selected, setSelected] = useState(data_dropDown.node?.children?.edges?.[indexLanguage]);
  const handleChanege = (index: number) => {
    // @ts-ignore 
    setSelected(data_dropDown[index])
    setIndexLanguage(index)
  }

  return (
    <div className="w-32 h-10  px-2 border-l border-l-gray-400 ">
      <Listbox >
        <Listbox.Button className="relative w-full cursor-default h-10 bg-[#212529] py-2.5  pr-10 text-left  sm:text-sm">
          <div className='flex space-x-2'>
            <Image
              // @ts-ignore 
              src={data_dropDown.node.children.edges[1].node.featuredImage.node.sourceUrl}
              width={27}
              height={5}
              // @ts-ignore 
              alt={selected?.node?.featuredImage?.node?.sourceUrl}
              className='h-4 mt-0.5'
            />
            <span className='text-gray-300 hover:text-white'>{data_dropDown.node.children.edges[1].node.title}</span>
          </div>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <i className="fa-sharp fa-solid fa-caret-down  text-gray-400"></i>
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className=" grid grid-rows-2 absolute  mt-1 h-24 w-40 cursor-default overflow-auto rounded-md bg-[#343a40] py-1 text-base  ring-1 ring-black ring-opacity-5 sm:text-sm ">
            {
              data_dropDown?.node?.children?.edges?.map((item: any) => (
                <a href={item?.node.template?.link?.link} className="hover:bg-slate-600" key={item?.node.template?.link?.link} target="_blank" rel="noopener noreferrer">
                  <div className='flex h-full space-x-3 items-center text-white px-2'>
                    <Image
                      src={item?.node?.featuredImage?.node?.sourceUrl}
                      width={25}
                      height={8}
                      alt={item?.node?.featuredImage?.node?.altText}

                    />

                    <p className=' text-md text-gray-300 hover:text-white'>{item?.node?.title}</p>
                  </div>
                </a>
              ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default Dropdown
