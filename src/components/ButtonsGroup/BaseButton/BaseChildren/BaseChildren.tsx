import styles from "./styles.module.scss"

export type IBaseChildren = {
    iconLeft?: any;
    iconRight?: any;
    labelText: string;
    classText?: string;
}

export default function BaseChildren({ iconLeft, iconRight, labelText, classText = "" }: IBaseChildren) {
    return <>
        <div className={styles.container}>
            {!!iconLeft && <span className={styles.container__icon_left}>{iconLeft}</span>}
            <h4 className={`${styles.container__text} ${classText}`}>{labelText}</h4>
            {!!iconRight && <span className={styles.container__icon_right}>{iconRight}</span>}
        </div>
    </>
}