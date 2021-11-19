import { RadioButtonProps } from 'src/interfaces'

function RadioButton(props: RadioButtonProps) {
  return (
    <>
      <div className={props.className} >
        <input type="radio" id={props.value} name={props.name} value={props.value} />
        <label htmlFor={props.value}><i></i>{props.children}</label>
      </div>
    </>
  )
}
export { RadioButton }