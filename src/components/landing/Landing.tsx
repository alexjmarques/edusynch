import { Course } from "@core/course/Course"
import hold from '../../assets/detail.png';
import Image from 'next/image'
import { Title } from '@components/elements';
import { Form, InputText, InputButton, RadioButton } from '@components/forms';
import { FormEvent, useState } from 'react';
import { LandingProps } from 'src/interfaces';



function Landing(props: LandingProps) {

  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');


  function handleTextChange(value) {
    setValue(value);

    if (value !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  async function HandleSearch(event: FormEvent) {
    event.preventDefault();
  }

  const classEffect = isActive ? 'inputs placeholder-white input__effect active' : 'inputs placeholder-white input__effect'
  const actionHandler = (e: any) => handleTextChange((e.target as HTMLTextAreaElement).value)

  return (
    <div className="md:flex xl:max-w-screen-xll md:max-w-screen-xl mx-auto md:px-4 md:h-screen">
      <div className="w-2/4 pt-20 image mm:hidden md:block">
        <Image className="h-full absolute left-8" src={hold} />
      </div>
      <div className="mm:w-screen sm:w-full md:w-2/3 mm:px-7 pt-20 lg:pl-10 lg:pr-10 ">
        <Title title="Find your" className="text-white font-normal mm:text-m-large text-large leading-10" />
        <Title title="best teacher" className="text-yellowMid  mm:text-mblarge font-bold uppercase text-large " />
        <p className="pt-10 text-regular lg:pr-36 font-normal mm:hidden md:block">Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!</p>

        <Form className="login__form pt-8 lg:mr-5" onSubmit={HandleSearch}>
          <InputText label="Type here what are you looking for" name="username" className={classEffect} value={value} onChange={actionHandler} />
          <div className="md:inline-flex items-start justify-start w-full">
            <div className="flex flex-row md:pr-10 radio__btn md:w-9/12">
              <RadioButton children="i’m a teacher" name="profile" className="inputs uppercase w-2/4 pr-2" value="Teacher" />
              <RadioButton children="i’m a student" name="profile" className="inputs uppercase w-2/4 pl-2" value="Student" />
            </div>
            <InputButton className="text-primaryVar mm:mt-7 md:mt-0 mm:w-full md:w-3/12 bg-yellow font-bold uppercase items-end p-3" name="btnSearch" children="Search" default={true} />
          </div>
        </Form>
      </div>

      <div className="w-96 pt-20 image sm:block md:hidden">
        <Image className="h-full absolute left-8" src={hold} />
      </div>

    </div>
  )
}

export { Landing }