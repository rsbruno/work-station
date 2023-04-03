import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface IBaseButton extends HTMLAttributes<HTMLButtonElement> {
    theme?: IBaseButtonThemes
}

export default function BaseButton({ children, className }: IBaseButton) {
    return <>
        <div className={`${styles.container} ${className}`}>
            <span className={styles.shadow} />
            <div className={styles.content}>{children}</div>
        </div>
    </>
}