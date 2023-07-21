export const CornerLocation = {
  topRight: "top-right",
  topLeft: "top-left",
  bottomRight: "bottom-right",
  bottomLeft: "bottom-left",
};
function CardCorner({ location, color = "" }) {
  const getLocationCorner = () => {
    switch (location) {
      case CornerLocation.topLeft:
        return CornerLocation.topLeft;

      case CornerLocation.topRight:
        return CornerLocation.topRight;

      case CornerLocation.bottomLeft:
        return CornerLocation.bottomLeft;

      case CornerLocation.bottomRight:
        return CornerLocation.bottomRight;

      default:
        "";
    }
  };

  let locationClass = getLocationCorner();

  return (
    <div className={`corner-wrapper ${locationClass}`}>
      <div className='corner'>
        <span className={color ?? color}></span>
        <span className={color ?? color}></span>
      </div>
    </div>
  );
}

export default CardCorner;
