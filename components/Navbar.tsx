export default function Navbar() {
  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: "2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
        }}
      >
        VacationWeb
      </div>

      <button
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Blijf op de hoogte
      </button>
    </header>
  );
}
