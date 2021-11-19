import logo from '../../assets/logo-white.svg';
import Image from 'next/image'

function Logo() {
  return (
    <>
      <div className="flex justify-start pr-10">
        <a href="/">
          <span className="sr-only">Eduick - Find your best teacher</span>
          <Image className="h-9 w-auto sm:h-10" src={logo} />
        </a>
      </div>
    </>
  )
}
export { Logo }