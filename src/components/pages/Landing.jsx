import React from "react";
import Fade from "@material-ui/core/Fade";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "../common/IconButton";
import resume from "../../assets/danlinzhouresume.pdf";
import projects from "../../assets/danlinprojects.pdf";

import { Section, Flex } from "../common/Layout";

function Landing(props) {
  return (
    <Section bgColor="#878787">
      <Flex direction="column" fullHeight fontSize={6} container>
        <Flex direction="column">
          <Fade in timeout={1500}>
            <div>DANLIN ZHOU</div>
          </Fade>
          <Fade in timeout={3000}>
            <Flex
              direction="row"
              fontSize={2.5}
              justifyContent="space-between"
              fullWidth
            >
              <IconButton icon={faFile} label="resume" link={resume} />
              <IconButton
                icon={faLinkedin}
                label="linkedin"
                link="https://www.linkedin.com/in/danlin-z/"
              />
              <IconButton
                icon={faProjectDiagram}
                label="projects"
                link={projects}
              />
              <IconButton
                icon={faEnvelope}
                label="email"
                link="mailto:d49zhou@uwaterloo.ca"
              />
            </Flex>
          </Fade>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Landing;
