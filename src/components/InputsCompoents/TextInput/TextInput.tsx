import { IBaseButton } from "@/components/ButtonsGroup/BaseButton/Base/BaseButton"
import { HTMLAttributes } from "react"
import BaseInput from "../Base/BaseInput"
import styles from "./styles.module.scss"

interface ITextInput extends HTMLAttributes<HTMLInputElement> {
    labelText?: string
}

export default function TextInput({ labelText, ...rest }: ITextInput) {
    return <>
        <BaseInput labelText={labelText}>
            <input type="text" {...rest} className={styles.textinput} />
        </BaseInput>
    </>
}