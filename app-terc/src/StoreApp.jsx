import Proptypes from "prop-types"

export const StoreApp = ({ title }) => {
  return (
    <>
      <h1>Buenas Noches{title}</h1>
      <p>Clase Noche</p>
    </>
  )
}

StoreApp.propTypes = {
  title: Proptypes.string.isRequired
}