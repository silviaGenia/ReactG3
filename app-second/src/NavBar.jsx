import PropTypes from "prop-types"

export const NavBar = ({ value }) => {
  return (
    <>
      <h1>Navegando entre paginas</h1>
      <h2>{value}</h2>
    </>
  )
}

NavBar.propTypes = {
  value: PropTypes.number
}