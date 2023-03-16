import React, { useEffect } from 'react';

const defaultHead = {
  title: "Portfólio",
  description: "Boas-vindas ao meu portfólio!",
}

type HeadProps = {
  title: string,
  description?: string,
} & typeof defaultHead;

export const Head = (props: HeadProps) => {
  useEffect(() => {
    console.log("Estive aqui!");
    document.title = "Manu | " + props.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", props.description);
  }, [props]);

  return (<></>)
}

Head.defaultProps = defaultHead;

export default Head;

