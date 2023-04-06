import { HTMLAttributes } from "react"
import styles from "./styles.module.scss"

export type IBaseInput = HTMLAttributes<HTMLDivElement> & {
    labelText?: string;
}

export default function BaseInput({ children, labelText }: IBaseInput) {
    return <>
        <div className={styles.container}>
            {!!labelText && <span className={styles.container__badge}>{labelText}</span>}
            {children}
        </div>
    </>
}