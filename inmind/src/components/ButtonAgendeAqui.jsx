import "./ButtonAgendeAqui.css"

const ButtonAgendeAqui = ({ toClick }) => {
  return (
    <div>
      <p onClick={toClick} className="buttonAgende">
        Agende Aqui!
      </p>
    </div>
  )
}

export default ButtonAgendeAqui