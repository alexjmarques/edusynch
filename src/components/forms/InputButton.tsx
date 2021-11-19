import { InputButtonProps } from 'src/interfaces';

function InputButton({ ...props }: InputButtonProps) {

  const buttonClass = props.default === true ? `p-2 pl-5 pr-5 font-bold ${props.className}` : props.className;
  return (
    <>
      <button className={buttonClass} id={props.name} {...props}>{props.children}</button>
    </>
  )
}
export { InputButton }