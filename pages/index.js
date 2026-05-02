import { useState } from "react";
import Avatar from "../components/Avatar";

export default function Home() {

  const [xp, setXp] = useState(0);
  const [skills, setSkills] = useState([]);

  function adicionarSkill(nome, valorXp) {
    if (!skills.includes(nome)) {
      setSkills([...skills, nome]);
      setXp(xp + valorXp);
    }
  }

  return (
    <div>

      {/* TOPO */}
      <div className="header">
        🚀 Protheus Journey
      </div>

      <div className="main">

        {/* AVATAR + XP */}
        <div className="card">
          <Avatar xp={xp} />
          <h2>XP: {xp}</h2>
        </div>

        {/* SKILLS */}
        <div className="card">
          <h3>Skills</h3>

          <button className="button" onClick={() => adicionarSkill("Criar tabela", 50)}>
            Criar tabela (+50 XP)
          </button>

          <button className="button" onClick={() => adicionarSkill("ADVPL básico", 100)}>
            ADVPL básico (+100 XP)
          </button>

          <button className="button" onClick={() => adicionarSkill("SELECT SQL", 80)}>
            SELECT SQL (+80 XP)
          </button>
        </div>

        {/* SKILLS ADQUIRIDAS */}
        <div className="card">
          <h3>Skills adquiridas</h3>
          <ul>
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}