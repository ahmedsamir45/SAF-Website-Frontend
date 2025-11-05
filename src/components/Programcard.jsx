function ProgramCard({ program }) {
  return (
    <div className="program-card">
      <img
        src={program.image_url || program.image}
        alt={program.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2>{program.title}</h2>
      <p>{program.description}</p>

      <p><strong>Category:</strong> {program.category}</p>
      <p><strong>Type:</strong> {program.type}</p>
      <p><strong>Audience:</strong> {program.audience}</p>
      <p><strong>Cost:</strong> {program.cost} EGP</p>

      <p>
        <strong>Start:</strong> {program.start_date}  
        <br />
        <strong>End:</strong> {program.end_date}
      </p>

      {program.requirements?.length > 0 && (
        <ul>
          {program.requirements.map((req) => (
            <li key={req.id}>{req.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProgramCard;
