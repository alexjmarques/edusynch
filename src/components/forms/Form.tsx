import { FormProps } from 'src/interfaces'


function Form({ ...props }: FormProps) {
  const formClass = `text-white flex flex-wrap mt-5 ${props.className}`
  return (
    <>
      <form className={formClass} {...props}>
        {props.children}
      </form>
    </>
  )
}
export { Form }