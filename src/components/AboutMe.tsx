import Title from "../util/Title";
import Paragraph from "../util/Paragraph";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <>
      <Title title="About me">
        <div className="content">
          <Paragraph
            isTitle={false}
            content="Born in 2005 in El Salvador. My work philosophy consists of creating useful tools for people, making design a part of functionality and functionality a part of the experience."
          />
          <Paragraph
            isTitle={true}
            delay={0.2}
            duration={0.6}
            title="Motivation"
            content="Create products that add something new to old formulas, express a minimalist way of solving problems, and contribute something new to the conversation."
          />
          <Paragraph
            isTitle={true}
            delay={0.3}
            duration={0.7}
            title="Currently"
            content="I am currently in my first year of college in Software Development Engineering at Universidad Católica de El Salvador, Santa Ana."
          />
        </div>
      </Title>
      <Title title="Skills">
        <Skills/>
      </Title>
    </>
  );
};

export default AboutMe;
