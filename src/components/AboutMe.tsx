import Title from "../util/Title";
import Paragraph from "../util/Paragraph";



const AboutMe = () => {
  return (
    <>
      <Title title="About me">
        <div className="content transition-all">
          <Paragraph
            isTitle={false}
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
          <Paragraph
            isTitle={true}
            delay={0.2}
            duration={0.6}
            title="Motivation"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
          <Paragraph
            isTitle={true}
            delay={0.3}
            duration={0.7}
            title="Currently"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
        </div>
      </Title>
      <Title title="Skills">
        <Paragraph
          delay={0.3}
          duration={0.7}
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
        />
      </Title>
    </>
  );
};

export default AboutMe;
