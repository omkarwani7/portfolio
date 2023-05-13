import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import {styles} from '../styles'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'
import { fadeIn,textVariant } from "../utils/motion"
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>My work</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("","",0.1,1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Projects i have done so far.
        </motion.p>

      </div>
    </>
  )
}

export default SectionWrapper(Works,"works")