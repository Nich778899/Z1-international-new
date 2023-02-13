import { useState} from "react"
import { MenuItems } from "../../Types/globals-types";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar({ Menu_Navbar }: { Menu_Navbar: MenuItems }) {
  const [isShow, setIsShow] = useState(false);
  const router: any = useRouter();
  // const [isMenu, setIsMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  // const [isScroll, setIsScroll] = useState('hidden');
  // const Route = router.asPath;

  const [searchString, setSearchString] = useState('');
  // SearchSubmit
  const searchHandle = (e: any) => {
    e.preventDefault();
    router.push(`/search/${searchString.replaceAll(' ', '-').toLowerCase()}`);
  };

  const handleClickMenu = () => {
    setIsShow(!isShow)
  }
  const path: any = router.asPath;
  const asPath = path.replace(/\//g, "")



  return (
    <div className=' bg-[#d4010e]  w-full h-full -mt-3 sticky top-0 z-[100]'>
      <div className=' flex flex-wrap justify-between max-w-[1320px] mx-auto text-center '>
        <ul className={`md:flex md:max-h-fit text-white shrink-0 md:order-first order-last md:w-[80%] overflow-hidden w-full block flex-row md:justify-start transition-[max-height] duration-1000 ease-in-out items-center ${isShow ? 'max-h-[100vh]' : 'max-h-0'}`}>
          <li className={`${asPath === "" ? "bg-[#be000d]" : ""} md:h-full px-5 md:py-2 py-4 hover:bg-red-700 md:border-l md:border-t-[0px] border-t-[0.3px] border-t-red-400 shrink-0 text-start border-l-gray-400 uppercase`}>
            <Link key={'/'} href={'/'}>
              <span className="uppercase">Home</span>
            </Link>
          </li>
          {Menu_Navbar.edges.map((item) => (
            <li key={item.node?.label} className={`${asPath === item.node.uri.replace(/\//g, "") ? "bg-[#be000d]" : ""} md:h-full px-5 md:py-2 py-4 hover:bg-red-700 md:border-l md:border-t-[0px] border-t-[0.3px] border-t-red-400 shrink-0 text-start border-l-gray-400 uppercase}`}>
              <Link href={item.node.uri}>
                <span className="uppercase">{item.node?.label} </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='md:hidden px-4 flex items-center'>
          <div id="menuIcon">
            {
              (isShow) ? (
                <i onClick={handleClickMenu} className="fa-solid fa-x text-white py-2 px-4 text-xl"></i>
              )
                : (
                  <i onClick={handleClickMenu} className="fa-solid fa-bars text-white py-2 px-4 text-xl"></i>
                )
            }
          </div>
          <div>
            <a href="">
              <h1 className="text-white text-lg">Z1 News International</h1>
            </a>
          </div>
        </div>
        <div >
          {/* Search Icon */}
          <button
            className="hover:bg-[#be000d]  "
            onClick={() => setIsSearch(!isSearch)}
          >
            <i className="fa-solid fa-magnifying-glass text-white text-xl py-2 px-2"></i>
          </button>
          {/* Search Drawer */}
          {isSearch ? (
            <form
              className="absolute -bottom-[54px] lg:right-24 md:right-24 right-1  p-2 bg-white border rounded-md "
              onSubmit={searchHandle}
            >
              <input
                type="text"
                placeholder="Search here..."
                className="border focus:rounded-none  placeholder:pl-4 focus:outline-none"
                id="search"
                onChange={(e) => setSearchString(e.target.value)}
              />
              <button
                className="text-white bg-[#be000d] px-3 py-[2px]  rounded-r-md"
                type="submit"
              >
                Search
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  )
}
export default Navbar