import { BadgeComponent } from '@/components/BadgeComponent/BadgeComponent'
import styles from './styles.module.scss'

export function UserComponent() {
    return <>
        <div className={styles.container}>
            <div className={styles.avatar__wrapper}>
                <div className={styles.avatar__container}>
                    <BadgeComponent badge={2} floating right={-4} />
                    <img src="https://github.com/rsbruno.png" alt="user avatar" className={styles.avatar__container__photo} />
                </div>
            </div>
            <div className={styles.user_props}>
                <h1 className={styles.user_props__name}>Bruno Roberto</h1>
                <div className={styles.user_props__experience}>
                    <h3 className={styles.user_props__experience__xp}>50/200xp</h3>
                    <span className={styles.user_props__experience__progress_bar} />
                </div>
            </div>
        </div>
    </>
}