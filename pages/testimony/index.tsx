import { MainLayout } from "../../layouts/MainLayout"
import { Pane } from "../../components/pane/Pane"
import styles from './testimony.module.scss'

export default function Watch() {

    const testimonyList = [
        {
            "title": "GOD\u2019S GOODNESS THROUGHOUT THE YEAR 2022",
            "body": "We as a family are deeply grateful and appreciative of our Heavenly Father for His peace that passes human understanding, goodness, mercy, kindness, grace, favour, divine visitation and protection. We thank God for Healing, health and wholeness of the whole family in 2022; We thank the Lord, we had no health emergencies in this family in 2022; We thank God for adding another year to the life of each of us; We have not had any loss in 2022. We thank God for divine protection as we went  from place to place- air, land, sea ; road \n",
            "name": "JBA"
        },
        {
            "title": "THE LORD THAT DELIVERS",
            "body": "Four people who consisted of my manager, 2 others on her level & 1 on my level gathered together to bring me down at my working place.\nI prayed for God to fight for me, I declared a 3 day fast initially but I heard the Holy Spirit saying, \"give me 7 days & I will show you what I can do. I obeyed, prayed and fasted. War broke up in the camp, my manager was exposed for the things she's been doing. 1 of them resigned & the other faced a lot of resistance from others. As for me, God delivered me, what the enemy meant for evil, the Lord turned it for my good. Glory to God!\n",
            "name": "Sister MS"
        },
        {
            "title": "HEALING FROM A DISTURBING BACKACHE",
            "body": "I suffered from back pain. It was making me uncomfortable & affecting my work. I used some pain relief but it didn't go. I called on Jehovah Rapha to touch me & continued serving God as usual. After mid week service, as I slept, I dreamt that an invisible hand touched my waist and to the glory of God the pain disappeared. To God alone be all the glory.\n",
            "name": "Sister MS"
        },
        {
            "title": "PERSISTENT PAIN HEALED THROUGH ANOINTED HAND",
            "body": "I suffered hip pain for over six months at the mercies of the GP and the hospital emergency. In the process I was given a walking aid to lean on. I went for X-ray and scan until God heard my prayers and sent a special doctor who is caring and loving to the to me. God healed me through him and I now able to walk properly again. All Glory to God!\n",
            "name": "MRS A"
        },
        {
            "title": "ABDOMEN PAIN HEALED AT SHILOH",
            "body": "An abdomen pain that caused a lot of discomfort to me disappeared instantly at Shiloh during one of the ministrations. I did not even know at the time but I was healed and I\u2019m whole.\nAll Glory to God!\n",
            "name": "MRS A"
        },
        {
            "title": "TURN AROUND IN ALL AREAS",
            "body": "I have come to return all the glory to this almighty God that is too faithful to fail, this time last year I was on the bed of affliction, rejected and lonely but the Lord turned the situations around for His name sake, change my stories and my status, answered all my prayers, in the 2022 I got married gloriously. To God of this commission be all the glory!                         \n",
            "name": "OA"
        },
        {
            "title": "SAFETY ALL AROUND",
            "body": "I travelled to Nigeria 2 times in the year 2022 the Lord kept me, the hand of the Lord was upon everyone that joined me to travelled to where my father was buried, the accident that suppose to claim the lives of 21 souls was averted to the glory of the Lord, 3 days after I returned to Bolton on my way to outreach I had an accident, my car was a complete write off,  but the Lord preserved my soul, He made me to see the  end of the year 2022 in grand style,  to God alone be all the glory!\n",
            "name": "OA"
        },
        {
            "title": "GOD OF PRESERVATION!",
            "body": "I want to give GOD all the glory for his protection, his preservation, his blessing and all that GOD has made possible for me and my household all through the year 2022. His mercies endureth forever.\nPraise God!\n",
            "name": "A.AO"
        },
        {
            "title": "DELIVERED FROM MASS DEATH",
            "body": "I have come to return glory to the God of  this commission for saving me and my entire family from sudden death by accident. \nWe travelled by road to the Netherlands during the summer holiday and it was only by the grace of God that we returned to Bolton alive inspite of the treacherous conditions. \n",
            "name": "A.AO"
        },
        {
            "title": "MIRACULOUS CAR PURCHASE",
            "body": "I have come as  ONE LEPPER to thank the Great God of this Great Commission. In the year 2022, God brought me out of Savage and into total liberty. Just like the children of Israel. In the year 2022 I bought my first car, sweatlessly. My praise and thanks to this Great God is endless. \nMay He remain glorified forever! \n",
            "name": "OJ"
        },
        {
            "title": "SAVED FROM BEDWETTING",
            "body": "I want to appreciate God for what he has done for me. Sometimes ago I was afflicted with bedwetting, this lasted into my marriage. It will occasionally come. Then I cried to God to take away this shame from me and ever since I have not seen it again and will never see it. To God alone be all the glory! \n",
            "name": "Sis AIB"
        }
    ]

    return (
        <MainLayout title='Testimony'>
            <section className={ styles.testimonyWrap }>
            {
                testimonyList.map((testimony, index) => (
                    <Pane
                        key={`testimony-${ index }`}
                        customStyle={{
                            width: '100%',
                            height: '100%',
                        }}
                        // onClick={ () => window.location.href = '/testimony/page' }
                        link='/testimony/page'
                    >
                        <h3 className={ styles.testimonyTitle }>{ testimony.title }</h3>
                        <p className={ styles.testimonyBody }>{ testimony.body }</p>
                    </Pane>
                ))
            }
            </section>
        </MainLayout>
    )
}