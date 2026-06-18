import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}

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
              Vergelijk vakanties van zorgvuldig geselecteerde reispartners
              vanuit één centraal overzicht.
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

        {/* WAAROM */}

        <section
          style={{
            padding: "100px 10%",
            background: "white",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            Waarom zoeken via VacationWeb?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            <div
              style={{
                padding: "40px",
                borderRadius: "20px",
                background: "#f8fafc",
              }}
            >
              <h3 style={{ marginBottom: "20px" }}>
                Traditionele reiswebsites
              </h3>

              <ul style={{ lineHeight: "2" }}>
                <li>Zoekopdracht invoeren</li>
                <li>Zoek bij reispartner A</li>
                <li>Herhaal bij reispartner B</li>
                <li>Herhaal bij reispartner C</li>
                <li>Vergelijk alles zelf</li>
              </ul>
            </div>

            <div
              style={{
                padding: "40px",
                borderRadius: "20px",
                background: "#e0f2fe",
              }}
            >
              <h3 style={{ marginBottom: "20px" }}>VacationWeb</h3>

              <ul style={{ lineHeight: "2" }}>
                <li>Geef één keer je voorkeuren in</li>
                <li>Wij vergelijken meerdere reispartners</li>
                <li>Ontdek waar jouw budget het meeste oplevert</li>
                <li>Alles in één overzicht</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VOORBEELD */}

        <section
          style={{
            padding: "100px 10%",
            background: "#f8fafc",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Voorbeeldscenario
          </h2>

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "white",
              padding: "50px",
              borderRadius: "24px",
            }}
          >
            <p>
              <strong>Budget:</strong> €2.000
            </p>

            <p>
              <strong>Periode:</strong> tussen 10 juli en 20 augustus
            </p>

            <p>
              <strong>Voorkeuren:</strong> Strandvakantie • 4 sterren • All
              Inclusive
            </p>

            <hr style={{ margin: "30px 0" }} />

            <p>🇪🇸 Spanje → 7 dagen</p>
            <p>🇬🇷 Griekenland → 8 dagen</p>
            <p>🇧🇬 Bulgarije → 10 dagen</p>
            <p>🇹🇷 Turkije → 11 dagen</p>
          </div>
        </section>

        {/* FOOTER */}

        <footer
          style={{
            padding: "60px 10%",
            background: "#0f172a",
            color: "white",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>VacationWeb</h3>

          <p>info@vacationweb.be</p>
          <p>info@vacationweb.nl</p>
        </footer>
      </main>
    </>
  );
}
