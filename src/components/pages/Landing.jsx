import React from 'react'
import Fade from '@material-ui/core/Fade';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../common/IconButton'
import pdf from '../../assets/testresume.pdf'

import {Section, Flex} from '../common/Layout'

function Landing (props) {
    return (
        <Section>
            <Flex direction='column' fullHeight fontSize={8} container>
                <Flex direction='column'>
                    <Fade in timeout={1500}>
                        <div>
                            DANLIN ZHOU
                        </div>
                    </Fade>
                <Fade in timeout={3000}>
                <Flex direction='row' fontSize={3} justifyContent='space-between' fullWidth>

                    <IconButton icon={faFile} label='resume' link={pdf}/>
                    <IconButton icon={faLinkedin} label='linkedin' link='https://www.linkedin.com/in/danlin-z/'/>
                    <IconButton icon={faProjectDiagram} label='projects' link={pdf}/>
                    <IconButton icon={faEnvelope} label='email' link='mailto:danlinsemail@danlin.com'/>
                </Flex>
                    </Fade>
                </Flex>
            </Flex>
        </Section>
    ) 
}

export default Landing