import React from "react";
import containerStyles from "./container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>;
};
