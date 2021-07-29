import { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react';

import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, placeholder, ...rest }, ref) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputStyle}
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </div>
  );
};

export const Input = forwardRef(InputBase);
