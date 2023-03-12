import React, { createContext, ReactNode, useState } from "react";

type SlideContextTypes = {
  active: number,
  position: number,
  setActive: React.Dispatch<React.SetStateAction<number>>,
  setPosition: React.Dispatch<React.SetStateAction<number>>,
}

type SlideProps = {
  children: ReactNode,
}

export const slideContext = createContext<SlideContextTypes>(null!);

const SlideContext = (props: SlideProps) => {
  const [active, setActive] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  const value = {
    active,
    position,
    setActive,
    setPosition
  }

  return (
    <slideContext.Provider value={value}>
      {props.children}
    </slideContext.Provider>
  )
}

export default SlideContext;
