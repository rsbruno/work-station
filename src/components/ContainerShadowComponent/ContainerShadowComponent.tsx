import { HTMLAttributes } from "react"
import styles from "./styles.module.scss"

interface IContainerShadowComponent extends HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    title?: string;
}

export function ContainerShadowComponent({ className, width, height, title, children }: IContainerShadowComponent) {
    return <>
        <section className={`${styles.container} ${className}`} style={{ maxWidth: width, height }}>
            {!!title && <header className={styles.container__header}>
                <h2 className={styles.container__header__title}>{title}</h2>
            </header>}
            <main className={styles.container__main}>{children}</main>
        </section>
    </>
}