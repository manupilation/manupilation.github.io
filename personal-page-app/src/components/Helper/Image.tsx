import React, { SyntheticEvent, useState } from 'react';
import styles from './Image.module.scss';

type ImageProps = {
  src: string,
  alt: string,
  className?: string,
};

const Image = (props: ImageProps) => {
  const { src, alt, className } = props;
  const [skeleton, setSkeleton] = useState(true);

  function handleOnLoad(event: SyntheticEvent<HTMLImageElement>) {
    const { currentTarget } = event;
    setSkeleton(false);
    currentTarget.style.opacity = "1";
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleOnLoad} className={styles.img} alt={alt} src={src}/>
    </div>
  );
};

export default Image;
