import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export type IBaseButton = HTMLAttributes<HTMLButtonElement> & {
    theme?: IBaseButtonThemes;
}

export default function BaseButton({ children, className, style, ...props }: IBaseButton) {
    return <>
        <div className={`${styles.container} ${className} `} style={style}>
            {/* <span className={styles.shadow} /> */}
            <button className={styles.content} {...props}>{children}</button>
        </div>
    </>
}