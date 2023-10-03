import { SelectedPage } from '@/shared/types'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER */}
        <div>
            {/* MAIN HEADER */}
            <div>
                {/* HEADINGS */}
                <div>
                    <div>
                        <div>
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>
                    <p>Transform your body, one workout at a time. Your fitness journey starts here.With our gym app, achieving your fitness goals is just a tap away. Elevate your workouts today!</p>
                </div>
                {/* ACTION */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                        Learn More
                    </AnchorLink>
                </div>
            </div>
            {/* IMAGE */}
            <div>
                <img src={HomePageGraphic} alt="home-page-graphic" />
            </div>
        </div>

        {/* SPONSORS */}
        {
            isAboveMediumScreens && (
                <div>
                    <div>
                        <div>
                            <img src={SponsorRedBull} alt="red-bull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default Home