import styles from './styles.module.scss'

import { HiOutlineComputerDesktop, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { TfiPowerOff } from 'react-icons/tfi'
import { RxDashboard } from 'react-icons/rx'
import { SlNotebook } from 'react-icons/sl'
import { BsGear } from 'react-icons/bs'

import { Buttons } from '@/components/ButtonsGroup'
import { BadgeComponent } from '@/components/BadgeComponent/BadgeComponent'

export function MenuComponent() {
    return <>
        <ul className={styles.container}>
            <li>
                <Buttons.NavigateButton
                    rigtIconComponent={<BadgeComponent badge={2} />}
                    leftIconComponent={<RxDashboard size={20} />}
                    label='Página Principal'
                    theme='primary'
                />
            </li>
            <li>
                <Buttons.NavigateButton
                    rigtIconComponent={<BadgeComponent />}
                    leftIconComponent={<SlNotebook size={20} />}
                    label='Minhas Tarefas'
                    theme='primary'
                />
            </li>
            <li>
                <Buttons.NavigateButton
                    leftIconComponent={<HiOutlineComputerDesktop size={20} />}
                    label='Meus Projetos' rigtIconComponent={<BadgeComponent />}
                    theme='primary'
                />
            </li>
            <li>
                <Buttons.NavigateButton
                    leftIconComponent={<HiOutlineBuildingOffice2 size={20} />}
                    rigtIconComponent={<BadgeComponent />}
                    label='Empresas'
                    theme='primary'
                />
            </li>
            <li><span className={styles.divider} /></li>
            <li>
                <Buttons.NavigateButton
                    leftIconComponent={<BsGear size={20} />}
                    label='Configurações'
                    theme='primary'
                />
            </li>
            <li>
                <Buttons.NavigateButton
                    leftIconComponent={<TfiPowerOff size={20} />}
                    theme='primary'
                    label='Sair'
                />
            </li>
        </ul>
    </>
}