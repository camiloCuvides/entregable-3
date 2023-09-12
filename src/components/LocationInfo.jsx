const LocationInfo = ({ location }) => {
  return (
    <article className="seccion1">
        <h2>{location?.name}</h2>
        <ul className="lista1">
          <li><span className="span1">Type:</span><span className="span2">{location?.type}</span></li>
          <li><span className="span1">Dimension:</span><span className="span2">{location?.dimension || 'unknown'}</span></li>
          <li><span className="span1">Population:</span><span className="span2">{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo