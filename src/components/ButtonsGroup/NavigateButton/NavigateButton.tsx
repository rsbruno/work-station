import Link from "next/link";
import BaseButton from "../BaseButton/BaseButton";
import styles from './styles.module.scss'
import classNames from 'classnames'

interface INavigateButton {
    leftIconComponent?: any;
    rigtIconComponent?: any;
    label: string;
    theme: IBaseButtonThemes;
}

export default function NavigateButton({ leftIconComponent, label, rigtIconComponent, theme }: INavigateButton) {
    return <>
        <BaseButton className={styles.basebutton_custom}>
            <Link href={""} className={styles.linkstyles}>
                <div className={classNames({
                    [styles.container]: true,
                    [styles[`variation_${theme}`]]: true,
                })}>
                    {leftIconComponent && <span className={styles.container__left_icon}>{leftIconComponent}</span>}
                    <strong className={styles.container__label_text}>{label}</strong>
                    {rigtIconComponent && <span className={styles.container__right_icon}>{rigtIconComponent}</span>}
                </div>
            </Link>
        </BaseButton>
    </>
}