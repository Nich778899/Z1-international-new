
import { HeaderType } from '../../Types/header/header-type'
import Contact from './Contact'
import Dropdown from './Dropdown'
import Plugin from './Plugin'
import Social_media from './Social_media'

function Header({header}:{header:HeaderType} ) {
  return (
    <div className="box-border bg-[#212529] overflow-x-auto w-full text-sm">
      <div className=" flex items-center md:w-[1320px] w-full h-10  bg-[#212529]  text-white mx-auto">
        <div className='flex'>
          <Dropdown data_dropDown={header.languages}/>
          <Social_media data_Social_media={header.socialMedias}/>
          <Plugin  data_Plugin={header.Plugin} />
        </div>
        <Contact data_contact={header.contact}/>
      </div>
    </div>
  )
}

export default Header