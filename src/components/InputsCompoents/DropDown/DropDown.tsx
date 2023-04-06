'use client'

import BaseChildren from "@/components/ButtonsGroup/BaseButton/BaseChildren/BaseChildren"
import BaseInput from "../Base/BaseInput"
import styles from "./styles.module.scss"
import { IoChevronDown } from 'react-icons/io5'
import { MouseEventHandler, useState } from "react"
import classNames from "classnames"

interface IDropDown {
    labelText?: string;
    placeholder?: string;
}

export default function DropDown({ labelText, placeholder }: IDropDown) {

    const options = [
        { label: "Pumpkin", value: 0 },
        { label: "Unifal", value: 1 },
        { label: "Google", value: 2 },
        { label: "Facebook", value: 3 },
    ]

    const [openDropDown, setopenDropDown] = useState<boolean>(false);

    const [current, setCurrentValue] = useState<string>("");

    const toggleDropDown = () => setopenDropDown(state => !state)

    const selectOption = (value: number) => {
        if (value !== undefined) {
            setCurrentValue(() => value.toString())
            toggleDropDown()
        }
    }

    return <>
        <div className={styles.container}>
            <BaseInput labelText={labelText}>
                <button className={styles.content_button} onClick={toggleDropDown}>
                    <h6 className={styles.content_button__text}>
                        {options.find(f => f.value.toString() === current.toString())?.label ?? placeholder}
                    </h6>
                    <span className={classNames({
                        [styles['content_button__icon']]: true,
                        [styles['content_button__icon_active']]: openDropDown,
                    })}><IoChevronDown size={20} /></span>
                </button>
            </BaseInput>
            <div className={classNames({
                [styles['list']]: true,
                [styles['list_opned']]: openDropDown,
            })}>
                <ul className={styles.list__content}>
                    {options.map(({ label, value }) => <li key={value}
                        className={classNames({
                            [styles['list__content__option']]: true,
                            [styles['list__content__option_active']]: current.toString() === value.toString(),
                        })}
                        onClick={() => selectOption(value)}>{label}</li>
                    )}
                </ul>
            </div>
        </div>
    </>
}