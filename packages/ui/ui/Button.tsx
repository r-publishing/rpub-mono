import React from 'react';
import { useState } from 'react'

import {
  IonButton
} from '@ionic/react';

interface ButtonProps {
  action?: (setCount: (count: number) => any) => void;
}

const defaultAction = (setCount) => {
  setCount((count) => count + 1)
}

export const Button: React.FC<ButtonProps> = ({
  action
}) => {

  const [count, setCount] = useState(0)
  
  return (<IonButton type="button" onClick={() => action ? action(setCount) : defaultAction(setCount)}>
    count is: {count}
  </IonButton>);
};

export default Button;
