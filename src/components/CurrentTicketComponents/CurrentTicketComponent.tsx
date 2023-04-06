'use client';

import { ContainerShadowComponent } from "../ContainerShadowComponent/ContainerShadowComponent"
import styles from "./styles.module.scss"
import IllustrationSVG from '@/assets/person.svg';
import Image from "next/image";
import { Buttons } from "../ButtonsGroup";
import { BsPlusCircle } from 'react-icons/bs'
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { useState } from "react";
import { TicketForm } from "../GroupForms/TicketForm/TicketForm";

interface ICurrentTicketComponents {

}

export function CurrentTicketComponents() {
    const [modalOpenState, setModalOpenState] = useState<boolean>(true);

    const toggleFormTiketModal = () => setModalOpenState(open => !open)

    return <>
        <ModalComponent modalOpenState={modalOpenState} onModalClose={setModalOpenState} children={<TicketForm />} />
        <ContainerShadowComponent title="Boa Noite, Bruno">
            <div className={styles.container}>
                <div className={styles.container__informations}>
                    <p className={styles.container__informations__paragraph}>
                        Não foram encontrados cartões abertos!<br />Quais são os planos para hoje?
                    </p>
                    <Buttons.SimpleButton
                        iconRight={<BsPlusCircle size={20} />}
                        labelText="Criar Cartão Rápido"
                        theme="secondary"
                        className={styles.custom_create_ticket_button}
                        onClick={toggleFormTiketModal}
                    />
                </div>
                <div className={styles.container__illustration}>
                    <Image src={IllustrationSVG} width={170} alt="ilustração tickets completos" className={styles.container__illustration__image} />
                    <span className={styles.container__illustration__background} />
                </div>
            </div>
        </ContainerShadowComponent>

    </>
}