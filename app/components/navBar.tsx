import { Menu, MenuHandler, Button, MenuList, MenuItem , ThemeProvider} from "@material-tailwind/react"
import Link from "next/link"

function NavBar() {
    return(
      <ThemeProvider>
      <div className="bg-gray-600">
        <div className='flex flex-row justify-between p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8'>
          <div className="flex">
          <h1 className='font-bold text-xl text-blue-900'>
          SHIFTSYC
            </h1>
          </div>
          <div className='hidden sm:hidden md:flex lg:flex xl:flex'>
            <ul className='flex flex-row gap-5'>
              <li><Link href="/#features">FEATURES</Link></li>
              <li>BLOG</li>
              <li className=""><Link href="/getstarted/signup">TRY SCHEDULING</Link></li>
              <li><Link href="/login">LOGIN</Link></li>
            </ul>
          </div>
          <div className="flex sm:flex md:hidden lg:hidden xl:hidden">
            <Menu placement="bottom-start">
              <MenuHandler>
               <Button className="bg-transparent border-2 border-blue-900 text-blue-900">Menu</Button>
              </MenuHandler>
              <MenuList>
                <MenuItem><Link href="/">HOME</Link></MenuItem>
                <MenuItem><Link href="/#features">FEATURES</Link></MenuItem>
                <MenuItem><Link href="/login">LOGIN</Link></MenuItem>
                <MenuItem><Link href="/getstarted/signup">TRY SCHEDULING</Link></MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        </div>
      </ThemeProvider>
  
    )
}

export default NavBar