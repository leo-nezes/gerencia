import {
  useRef,
  InputHTMLAttributes,
} from 'react';

import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <input
        className={styles.inputStyle}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        {...rest}
      />
    </div>
  );
};
