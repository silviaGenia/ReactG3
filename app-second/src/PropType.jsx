import PropTypes from "prop-types"

export const PropType = ({ title = "No hay un titulo", description }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </>
  )
}


PropType.propTypes = {
  title: PropTypes.string,
  description: PropTypes.number.isRequired
}


/* PropType.defaultProps = {
  title: "No hay un titulo"
}
 */


//1. NavBar

//<h1>Navegando entre paginas</h1>
//<h2>{valor}<h2/>