import styles from './layoutStyles.module.scss';
import '@/styles/globals.scss'
import { LogoComponent } from '@/components/SideBarComponents/LogoComponent/LogoComponent';
import { UserComponent } from '@/components/SideBarComponents/UserComponent/UserComponent';
import { MenuComponent } from '@/components/SideBarComponents/MenuComponent/MenuComponent';

export const metadata = {
  title: '',
}

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-br">
      <body>
        <section className={styles.container}>
          <aside className={styles.container__navbar}>
            <LogoComponent />
            <UserComponent />
            <MenuComponent />
          </aside>
          <main className={styles.container__main}>{children}</main>
        </section>
      </body>
    </html>
  )
}
