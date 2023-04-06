'use client';
//@ts-ignore
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import { CSSProperties, Dispatch, HTMLAttributes, SetStateAction } from 'react';

interface IModalComponent extends HTMLAttributes<HTMLDivElement> {
    modalOpenState: boolean;
    onModalClose: Dispatch<SetStateAction<boolean>>
}

const customStyles = {
    width: 'auto',
    height: 'auto',
    maxWidth: 'min-content',
    maxHeight: 'min-content',
    padding: 0,
    background: "transparent"
} as CSSProperties

export function ModalComponent({ modalOpenState, onModalClose, children }: IModalComponent) {

    return <>
        <Rodal
            onClose={() => onModalClose(() => false)}
            customStyles={customStyles}
            visible={modalOpenState}
            animation="door"
        ><>{children}</></Rodal>
    </>
}