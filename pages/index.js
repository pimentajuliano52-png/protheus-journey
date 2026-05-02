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
    <div style={{ padding: 20 }}>

      <h1>🚀 Protheus Journey</h1>

      <Avatar xp={xp} />

      <h2>XP: {xp}</h2>

      <h3>Skills:</h3>

      <button onClick={() => adicionarSkill("Criar tabela", 50)}>
        Sei criar tabela (+50 XP)
      </button>

      <br /><br />

      <button onClick={() => adicionarSkill("ADVPL básico", 100)}>
        Sei ADVPL básico (+100 XP)
      </button>

      <br /><br />

      <button onClick={() => adicionarSkill("SELECT SQL", 80)}>
        Sei SELECT SQL (+80 XP)
      </button>

      <h3>Skills adquiridas:</h3>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

    </div>
  );
}