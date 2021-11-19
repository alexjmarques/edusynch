
import { Logo } from '@components/utils';
import { LoginModal } from '@components/utils';
import { ExternalMenu } from '..';

function Header(props) {
  return (
    <div className="relative bg-primary text-cyan font-openSans z-10">
      <div className="xl:max-w-screen-xll md:max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-start py-6 md:justify-start md:space-x-5 text-xs">
          <ExternalMenu />
          <Logo />
          <div className="hidden lg:flex space-x-10">
            <a href="#" className="text-base font-normal hover:text-quaternary">How it works</a>
            <a href="#" className="text-base font-normal hover:text-quaternary">About Us</a>
          </div>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <LoginModal title="Get Started" className="mm:hidden ml-8 text-primaryVar bg-yellow p-3 pl-10 pr-10 font-bold text-base rounded-md md:block" />
          </div>
        </div>
      </div>
    </div>
  )
}
export { Header }