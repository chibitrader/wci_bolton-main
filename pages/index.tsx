import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.scss';
import heroStyles from '../styles/hero.module.scss';
import coinatinerStyles from '../styles/container.module.scss'
import { Pane } from "../components/pane/Pane"
import { MainLayout } from "../layouts/MainLayout"
import { Button } from "../components/Button/Button"
import { Container } from "../components/container/container"

export default function Home() {
  return (
    <MainLayout title='Home'>
      <div className={heroStyles.hero}>
        <Pane>
          <h2>Come join us<br></br> in worship</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button text="Join Us" />
          </div>
        </Pane>
      </div>
    </MainLayout>
  );
}










