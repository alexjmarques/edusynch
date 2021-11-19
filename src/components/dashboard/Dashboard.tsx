import hold from '../../assets/people.png';
import bols from '../../assets/bols.png';
import Image from 'next/image'
import { Title } from '@components/elements';
import { CourseList } from '@components/course';
import { DashboardProps } from '@interfaces/dashboard';


function DashboardComponents(props: DashboardProps) {
  return (
    <div className="xl:max-w-screen-xll md:max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-wrap w-screen">
      <div className="flex mm:flex-col md:flex-row items-center bg-white mt-8 mb-8 pl-9 mm:h-auto md:h-56 w-full">
        <div className="bols">
          <Image src={bols} />
        </div>
        <div className="mm:pt-10 mm:pb-10 md:pt-0 md:pb-0">
          <Title title="Hello" className=" text-secundary font-normal text-m-base float-left pr-2" />
          <Title title="Student" className=" text-secundary font-bold text-m-base float-left" />
          <Title title="." className="text-yellow font-bold text-m-base float-left" />
          <p className="md:pt-10 text-base mm:pt-12 md:pr-36 font-normal">Whether you are a student trying to find your ideal private language teachers/tutors</p>
        </div>
        <div className="hidden md:block">
          <Image src={hold} />
        </div>
      </div>
      <div className="flex flex-row w-screen h-full mb-8 ">
        <CourseList />
      </div>
    </div>
  )
}

export { DashboardComponents }