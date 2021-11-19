import { TitleProps } from 'src/interfaces'

function Title(props: TitleProps) {
  const formClass = `p-0 m-0 font-poppins ${props.className}`
  return (
    <>
      <h1 className={formClass}>{props.title}</h1>
    </>
  )
}
export { Title }