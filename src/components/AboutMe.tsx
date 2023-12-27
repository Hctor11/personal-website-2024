import Title from "./Title";
import Paragraph from "./Paragraph";

const AboutMe = () => {
  return (
    <>
      <Title title="About me">
        <div className="content">
          <Paragraph
            isTitle={false}
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
          <Paragraph
            isTitle={true}
            title="Motivation"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
        </div>
      </Title>
    </>
  );
};

export default AboutMe;
