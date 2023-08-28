import React from 'react';
import experience from '../../types/ExpType';
import Image from '../Helper/Image';
import Icons from '../Helper/SvgImporter';

const ExpComponent = (props: {exp: experience}) => {
  const {color, contrastColor, tech} = props.exp;
  const key = tech as keyof typeof Icons;

  return (
    <div style={{backgroundColor: color}}>
      <Image src={Icons[key]} alt='tech image'/>
      <p style={{color: contrastColor ? "#F4F4F4" : "#111"}}>
        {tech}
      </p>
    </div>
  );
}

export default ExpComponent;