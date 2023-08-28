import React from 'react';
import experience from '../../types/ExpType';
import Image from '../Helper/Image';


const ExpComponent = (props: {exp: experience}) => {
  const {color, contrastColor, tech} = props.exp;
  const defaultUrl = '../../../images/exps/' + tech + '.svg';

  return (
    <div style={{backgroundColor: color}}>
      <Image src={defaultUrl} alt='tech image'/>
      <p style={{color: contrastColor ? "#F4F4F4" : "#333"}}>
        {tech}
      </p>
    </div>
  );
}

export default ExpComponent;