import './ButtonContinue.css'

const ButtonContinue = ( {toClick} ) => {
  return (
    <div>
        <button className='buttonContinue' onClick={toClick}>Continuar</button>
    </div>
  )
}

export default ButtonContinue