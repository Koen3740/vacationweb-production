import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section
          style={{
            minHeight: "100vh",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "700px",
              marginLeft: "10%",
              color: "white",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "0.6rem 1rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.5)",
                marginBottom: "1.5rem",
              }}
            >
              ☀️ Een nieuwe manier om vakantie te zoeken
            </div>

            <h1
              style={{
                fontSize: "5rem",
                lineHeight: 1.05,
                fontWeight: 800,
                marginBottom: "1.5rem",
              }}
            >
              Meer vakantie
              <br />
              voor jouw budget
            </h1>

            <p
              style={{
                fontSize: "1.3rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Traditionele reiswebsites vertrekken vanuit een bestemming en
              vertrekdatum. Wij vertrekken vanuit jouw budget, flexibiliteit en
              voorkeuren.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "1rem 1.8rem",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Blijf op de hoogte
              </button>

              <button
                style={{
                  padding: "1rem 1.8rem",
                  borderRadius: "999px",
                  background: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Ontdek het concept
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
