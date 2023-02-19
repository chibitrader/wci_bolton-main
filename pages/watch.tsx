import ReactPlayer from 'react-player';
import homeStyles from '../styles/Home.module.scss';
import heroStyles from '../styles/hero.module.scss';
import { Pane } from "../components/pane/Pane"
import { MainLayout } from "../layouts/MainLayout"
import { Button } from "../components/Button/Button"
import { Container } from "../components/container/container"

export default function Watch() {

    return (
        <MainLayout title='Watch'>
    <div className={heroStyles.hero}>
      <Pane>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              width='100%'
              height='100%'
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
      </Pane>
    </div>
        </MainLayout>
    )
}