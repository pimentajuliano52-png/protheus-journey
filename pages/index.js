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
    <div className="container">

      {/* MENU */}
      <div className="sidebar">
        <h2>Protheus</h2>
        <div className="menu-item">Dashboard</div>
        <div className="menu-item">Skills</div>
        <div className="menu-item">Projetos</div>
      </div>

      {/* CONTEÚDO */}
      <div className="main">

        <h1>🚀 Protheus Journey</h1>

        <div className="card">
          <Avatar xp={xp} />
          <h2>XP: {xp}</h2>
        </div>

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