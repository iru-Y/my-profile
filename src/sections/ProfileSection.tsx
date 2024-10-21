import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <section className="container">
      <div className="my-name">
        <img src="src/assets/profile-arrow.svg" alt="Seta de perfil" />
        <p>Olá! Eu sou </p>
        <p style={{ color: "#7127BA" }}>Yuri Matthewus</p>
      </div>

      <div className="profile">
        <img
          src="src/assets/eu.png"
          alt="Foto de Yuri"
          style={{ width: "268px", height: "268px" }}
        />

        <div className="professional">
          <p className="profession-title">
            Programadores e artistas
          </p>

          <span className="profession-text">
            são os únicos profissionais que têm como <span className="hobby-circle">hobby</span>
          </span>

          <p className="profession-subtitle">a própria profissão.</p>
        </div>
      </div>

      <div className="who">
        <span>Full Stack developer e mobile.<span className="blink">|</span> </span>
        <p>Atualmente trabalhando como freelancer.</p>
      </div>

      <div>
        <p>
        Resolvendo problemas dos meus clientes da área da tecnologia desde os 14 anos de idade. Antes na manutenção de computadores e celulares, agora, com sites, aplicativos e servidores.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
;