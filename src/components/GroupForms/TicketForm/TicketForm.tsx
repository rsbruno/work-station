import { Buttons } from "@/components/ButtonsGroup"
import { Inputs } from "@/components/InputsCompoents"
import styles from "./styles.module.scss"

interface ITicketForm {

}

export function TicketForm() {
    return <>
        <div className={styles.container}>
            <div className={styles.fields_texts}>
                <Inputs.TextInput labelText="Nome do Cartão/Tarefa" />
            </div>
            <div className={styles.fields__dropdowns}>
                <Inputs.DropDown labelText="Empresa Associada" placeholder="Escolher..." />
                <Inputs.DropDown labelText="Projeto Associado" placeholder="Escolher..." />
            </div>
            <footer>
                <Buttons.SimpleButton labelText="Criar Cartão" theme="primary" className={styles.fields__submit} />
                <small className={styles.fields__rules_cancel}>clique/toque fora do modal para cancelar</small>
            </footer>
        </div>
    </>
}