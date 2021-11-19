
import { Logo } from '@components/utils';
import { InternalMenu } from '..';

function HeaderAdmin() {
  return (
    <>
      <div className="relative bg-primary text-cyan font-openSans z-10">
        <div className="xl:max-w-screen-xll md:max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-5 text-xs">
            <Logo />
            <div className="hidden lg:flex space-x-10">
              <a href="#" className="text-base font-normal hover:text-quaternary">My Classes</a>
            </div>
            <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
              <InternalMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export { HeaderAdmin }