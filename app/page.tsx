import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          VacationWeb
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "700px",
          }}
        >
          Meer vakantie voor jouw budget
        </p>
      </main>
    </>
  );
}
