import React from 'react';

const Pagination = props => {

  return(
    <div className="py-3">
      <button onClick={props.beforePage} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
      <button onClick={props.afterPage} type="button" className="btn btn-info">Siguiente &rarr;</button>
    </div>
  )
}

export default Pagination;