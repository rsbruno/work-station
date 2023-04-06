import { ContainerShadowComponent } from '@/components/ContainerShadowComponent/ContainerShadowComponent'
import { CurrentTicketComponents } from '@/components/CurrentTicketComponents/CurrentTicketComponent'
import styles from './styles.module.scss'

export default function DashBoardPage() {
    return <>

        <section className={styles.container}>
            <section className={styles.group_tickets_progress}>
                <CurrentTicketComponents />
                <ContainerShadowComponent width='300px' />
                <ContainerShadowComponent width='300px' />
            </section>
            <section className={styles.group_data_list}>
                <ContainerShadowComponent width='500px' />
                <ContainerShadowComponent />
            </section>
            <section className={styles.group_data_graphs}>
                <ContainerShadowComponent />
                <ContainerShadowComponent />
                <ContainerShadowComponent width='300px' />

            </section>
            <section className={styles.group_todo_list}>
                <ContainerShadowComponent />
            </section>


            {/* <ContainerShadowComponent className={styles.last_todo_status} />
            <ContainerShadowComponent className={styles.my_progress_finished} />
            <ContainerShadowComponent className={styles.my_progress} />
            <ContainerShadowComponent className={styles.todo_list} />
            <ContainerShadowComponent className={styles.tasks_history} /> */}
        </section>

    </>
}