export default function Navbar() {
  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: "1rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src="/logo.png"
        alt="VacationWeb"
        style={{
          height: "130px",
          width: "auto",
        }}
      />

      <button
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          background: "white",
          fontWeight: 600,
        }}
      >
        Blijf op de hoogte
      </button>
    </header>
  );
}
