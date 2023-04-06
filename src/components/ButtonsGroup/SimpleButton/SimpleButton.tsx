import themes from "../BaseButton/themes.module.scss"
import BaseChildren, { IBaseChildren } from "../BaseButton/BaseChildren/BaseChildren"
import BaseButton, { IBaseButton } from "../BaseButton/Base/BaseButton"

interface ISimpleButton extends IBaseChildren, IBaseButton { }

export default function SimpleButton({ theme, iconLeft, labelText, iconRight, className, ...props }: ISimpleButton) {
    return <>
        <BaseButton className={`${themes[`variation_${theme}`]} ${className}`} {...props}>
            <BaseChildren
                classText={`${themes[`variation_${theme}__text`]}`}
                labelText={labelText}
                iconRight={iconRight}
                iconLeft={iconLeft}
            />
        </BaseButton>
    </>
}