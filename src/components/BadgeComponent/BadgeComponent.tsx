import styles from "./styles.module.scss"

import classNames from 'classnames'

interface IBadgeComponent {
    floating?: boolean;
    bottom?: number;
    right?: number;
    badge?: number;
    left?: number;
    top?: number;
}

export function BadgeComponent({ badge, floating, top, bottom, right, left }: IBadgeComponent) {
    return <>
        {!!badge && <div className={classNames({
            [styles.container]: true,
            [styles.is_floating]: !!floating
        })} style={{ top, bottom, right, left }}>{badge}</div>}
    </>
}