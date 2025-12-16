import "./ButtonEnter.css";

const ButtonEnter = ( {toClick} ) => {
  return (
    <div>
      <p className="buttonEnter" onClick={toClick}>
          Entrar
      </p>
    </div>
  )
}

export default ButtonEnter
