
import { FormEvent, useState, Fragment } from 'react';
import { EyeIcon, EyeOffIcon, XIcon } from '@heroicons/react/outline'
import { Form, InputText, InputButton } from '@components/forms';
import { Dialog, Transition } from '@headlessui/react'
import { Title } from '@components/elements';
import { LoginModalProps } from 'src/interfaces';

function LoginModal(props: LoginModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [passwordToogle, setPasswordShow] = useState(false);

  const tooglePassword = () => {
    setPasswordShow(passwordToogle ? false : true);
  };
  async function HandleSearch(event: FormEvent) {
    event.preventDefault();
    //Redirect - Aqui tratariamos a validação do usuario antes que o mesmo fosse enviado para a Dashboard caso tenha acesso valido
    window.location.href = "/dashboard";

  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button onClick={openModal} className={props.className}>{props.title}</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          static={true}
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">

            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="overlay fixed inset-0 bg-secundary bg-opacity-70" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="modal__edusynch bg-primary p-10 z-10">
                  <InputButton name="btnLogin" onClick={closeModal} className="modal__close" default={false}>
                    <XIcon className="inline-flex items-center justify-center h-6 w-6" aria-hidden="true" />
                  </InputButton>

                  <Title title="Get Started" className="text-white font-normal text-blarge leading-10" />
                  <Title title="Just Login" className="text-yellowMid font-bold uppercase text-blarge leading-10" />

                  <Form className="login__form" onSubmit={HandleSearch}>
                    <InputText label="Username:" name="username" className="username" type="text" />
                    <div className="w-full login__form__icon-hide relative">
                      <InputText label="Password:" name="password" className="password" type={passwordToogle ? "text" : "password"} />
                      <i className="absolute bottom-6 right-4 cursor-pointer text-white" onClick={tooglePassword}> {passwordToogle ? <EyeOffIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}  </i>
                    </div>
                    <div className="inline-flex items-end justify-end w-full">
                      <InputButton className="text-primaryVar bg-yellow p-2 pl-5 pr-5 font-bold uppercase items-end" name="btnLogin" children="Login" default={true} />
                    </div>
                  </Form>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export { LoginModal }
