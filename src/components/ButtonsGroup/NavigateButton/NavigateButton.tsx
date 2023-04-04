import Link from "next/link";
import BaseButton from "../BaseButton/Base/BaseButton";
import styles from './styles.module.scss'
import stylesthemes from './stylethemes.module.scss'
import BaseChildren, { IBaseChildren } from "../BaseButton/BaseChildren/BaseChildren";

interface INavigateButton extends IBaseChildren {
    theme: IBaseButtonThemes;
}

export default function NavigateButton({ theme, ...propsBaseChildren }: INavigateButton) {
    return <>
        <BaseButton className={`${styles.basebutton_custom} ${stylesthemes[`variation_${theme}`]}`}>
            <Link href={""} className={styles.linkstyles}>
                <BaseChildren {...propsBaseChildren} classText={styles.base_children_text} />
            </Link>
        </BaseButton>
    </>
}