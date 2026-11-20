import { createContext, useContext } from "react";

export const RobotReadyContext = createContext(false);
export const useRobotReady = () => useContext(RobotReadyContext);
