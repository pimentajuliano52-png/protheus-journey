export default function Avatar({ xp }) {

  let nivel = "trainee";

  if (xp > 100) nivel = "junior";
  if (xp > 300) nivel = "pleno";
  if (xp > 600) nivel = "senior";
  if (xp > 1000) nivel = "master";

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{nivel.toUpperCase()}</h2>
    </div>
  );
}