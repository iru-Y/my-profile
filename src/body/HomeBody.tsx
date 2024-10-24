import "./HomeBody.css";
import ProfileSection from "../sections/ProfileSection";
import WorkSection from "../sections/WorkSection";

interface HomeBodyProps {
  bodyRef: React.RefObject<HTMLDivElement>;
}

const HomeBody: React.FC<HomeBodyProps> = ({ bodyRef }) => {
  return (
    <div className="home-body">
      <ProfileSection />
      <WorkSection bodyRef={bodyRef} />
      <div style={{ paddingTop: "200px" }}>
        <p>
          Estou buscando entrar em uma equipe para resolver cada vez mais
          desafios.{" "}
        </p>
        <img src="/bitmap.svg" alt="" />
      </div>
    </div>
  );
};

export default HomeBody;
