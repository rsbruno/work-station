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
        <Buttons.NavigateButton
            iconRight={<BadgeComponent badge={2} />}
            iconLeft={<RxDashboard size={20} />}
            labelText='Página Principal'
            theme='primary'
        />
        <Buttons.NavigateButton
            iconRight={<BadgeComponent />}
            iconLeft={<SlNotebook size={20} />}
            labelText='Minhas Tarefas'
            theme='primary'
        />
        <Buttons.NavigateButton
            iconLeft={<HiOutlineComputerDesktop size={20} />}
            iconRight={<BadgeComponent />}
            labelText='Meus Projetos'
            theme='primary'
        />
        <Buttons.NavigateButton
            iconLeft={<HiOutlineBuildingOffice2 size={20} />}
            iconRight={<BadgeComponent />}
            labelText='Empresas'
            theme='primary'
        />
        <span className={styles.divider} />
        <Buttons.NavigateButton
            iconLeft={<BsGear size={20} />}
            labelText='Configurações'
            theme='primary'
        />
        <Buttons.NavigateButton
            iconLeft={<TfiPowerOff size={20} />}
            theme='primary'
            labelText='Sair'
        />
    </>
}