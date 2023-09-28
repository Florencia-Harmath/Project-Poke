

const button = ( {icon, handleClick} ) => {
  return (
    <>
    <button onClick={handleClick}>{icon}</button>
    </>
  )
}

export default button;