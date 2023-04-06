'use client';

import BaseInput, { IBaseInput } from "../Base/BaseInput"
import styles from "./styles.module.scss"
import Calendar from 'react-calendar';
import { IoCalendarOutline } from 'react-icons/io5'

import 'react-calendar/dist/Calendar.css';
import { MouseEvent, useState } from "react";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { getNameMonth, getNameWeek } from "@/utils/moments";

interface IDateTime extends IBaseInput {

}

export default function DateTime({ ...props }: IDateTime) {

    const [dateSelected, setDateSelected] = useState<string>("");
    const [current, setCurrent] = useState<any>(new Date());

    const handleCustomDate = (value: Value) => {
        if (!!value) {
            const [week, month, day] = value.toString().split(' ')
            setDateSelected(() => `${getNameWeek(week)}, ${day} de ${getNameMonth(month)}`)
            setCurrent(value)
            console.log(week, month, day)
        }
    }

    return <>
        <section className={styles.calendar}>
            <BaseInput {...props}>
                <div className={styles.calendar_content}>
                    <h4 className={styles.calendar_content__text}>{dateSelected}</h4>
                    <span className={styles.calendar_content__icon}>
                        <IoCalendarOutline size={25} />
                    </span>
                </div>
            </BaseInput>
            <div className={styles.calendar__wrapper}>
                <Calendar
                    className={styles.calendar_container}
                    tileClassName={styles.tile_day_container}
                    showNeighboringMonth={false}
                    showNavigation={false}
                    onChange={handleCustomDate}
                    value={current}
                    minDate={new Date()}
                />
            </div>
        </section>
    </>
}