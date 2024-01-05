import CV from "../assets/completeCV.pdf";
import Title from "../util/Title";

const Contact = () => {
  return (
    <div>
      <Title title="Contact and Social media">
        <div className="flex flex-col gap-1 mt-2">
          <a
            href="https://www.linkedin.com/in/hectorrivera222/"
            target="_blank"
            className="hover:text-blue-600"
          >
            LinkedIn
          </a>

          <hr />

          <a
            href="https://dribbble.com/HectorRivera222"
            target="_blank"
            className="hover:text-pink-500"
          >
            Dribble
          </a>

          <a
            href="https://www.behance.net/hctorrivera3"
            target="_blank"
            className="hover:text-blue-500"
          >
            Behance 1
          </a>

          <a
            href="https://www.behance.net/time_"
            target="_blank"
            className="hover:text-blue-500"
          >
            Behance 2
          </a>

          <hr />

          <a
            href="https://github.com/Hctor11"
            target="_blank"
            className="hover:text-zinc-400"
          >
            Github
          </a>
          <hr />

          <a
            href={CV}
            target="_blank"
            className="underline hover:text-orange-500"
          >
            Resume
          </a>
        </div>
      </Title>
    </div>
  );
};

export default Contact;
