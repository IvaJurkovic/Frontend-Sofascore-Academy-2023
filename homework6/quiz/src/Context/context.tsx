import React from "react";

export interface AppContextInterface {
  questionNumber: number;
  disable5050: boolean;
  disableFriend: boolean;
  disableGroup: boolean;
  removeAnswer1: string;
  removeAnswer2: string;
  setProperty: (property: string, value: string | boolean | number) => void;
}

const AppContext = React.createContext<AppContextInterface>(
  {} as AppContextInterface
);

export default AppContext as React.Context<AppContextInterface>;
