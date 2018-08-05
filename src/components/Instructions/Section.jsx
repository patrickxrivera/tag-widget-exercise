import React, { PropTypes } from 'react';

import './Instructions.css'

const propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.node
    ]).isRequired
}

function Section({ title, children }){
  return (
    <section>
      <div className="section-title">{title}</div>
      <div className="section-description">
        {children}
      </div>
    </section>
  )
}

Section.propTypes = propTypes;

export default Section;
