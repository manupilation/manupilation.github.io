import React, { createContext, ReactNode, useState } from "react";

type ExperienceContextTypes = {
  isFront: boolean,
  isBack: boolean,
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>,
  setIsBack: React.Dispatch<React.SetStateAction<boolean>>,
}

type ExperienceProps = {
  children: ReactNode,
}

export const experienceContext = createContext<ExperienceContextTypes>(null!);

const ExperienceContext = (props: ExperienceProps) => {
  const [isFront, setIsFront] = useState<boolean>(true);
  const [isBack, setIsBack] = useState<boolean>(true);

  const experienceValue = {
    isFront,
    isBack,
    setIsFront,
    setIsBack,
  }

  return (
    <experienceContext.Provider value={experienceValue}>
      {props.children}
    </experienceContext.Provider>
  )
}

export default ExperienceContext;
