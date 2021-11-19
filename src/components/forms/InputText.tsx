import { InputTextProps } from 'src/interfaces'

function InputText({ ...props }: InputTextProps) {
  const formClass = `flex flex-wrap items-start justify-start w-full p-3 pl-0 pr-0 mb-2 ${props.className}`
  return (
    <>
      <div className={formClass}>
        <label htmlFor={props.name} className="text-white font-regular text-regular mb-1">{props.label}</label>
        <input {...props} className="inputs font-normal w-full p-3" placeholder={props.placeHolder} />
      </div>
    </>
  )
}
export { InputText }