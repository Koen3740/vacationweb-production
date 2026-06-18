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
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
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
                "linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40))",
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
                maxWidth: "650px",
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
            padding: "120px 10%",
            background: "white",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#0ea5e9",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Waarom VacationWeb?
          </div>

          <h2
             style={{
    fontSize: "4.5rem",
    fontWeight: 800,
    lineHeight: 1.05,
    color: "#0f172a",
    marginBottom: "30px",
  }}
>
            Eén zoekopdracht.
            <br />
            Meerdere reispartners.
          </h2>
<p
  style={{
    maxWidth: "720px",
    margin: "0 auto 60px auto",
    color: "#64748b",
    fontSize: "1.1rem",
    lineHeight: "1.8",
  }}
>
  Traditioneel vergelijk je telkens maar één website tegelijk.
  VacationWeb vergelijkt meerdere reispartners vanuit één zoekopdracht
  en toont waar jouw budget de meeste waarde oplevert.
</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "#f8fafc",
                padding: "40px",
                borderRadius: "24px",
                textAlign: "left",
              }}
            >
              <h3 style={{ marginBottom: "25px" }}>
                Traditionele reiswebsites
              </h3>

              <p>• Zoekopdracht invoeren</p>
              <p>• Zoek bij reispartner A</p>
              <p>• Herhaal bij reispartner B</p>
              <p>• Herhaal bij reispartner C</p>
              <p>• Vergelijk alles zelf</p>
            </div>

            <div
              style={{
                background: "#e0f2fe",
                padding: "40px",
                borderRadius: "24px",
                textAlign: "left",
              }}
            >
              <h3 style={{ marginBottom: "25px" }}>VacationWeb</h3>

              <p>• Geef één keer je voorkeuren in</p>
              <p>• Vergelijk meerdere reispartners tegelijk</p>
              <p>• Ontdek waar jouw budget het meeste oplevert</p>
              <p>• Alles in één overzicht</p>
            </div>
          </div>
        </section>

        {/* VOORBEELD */}

        <section
          style={{
            padding: "120px 10%",
            background: "#f8fbfd",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#0ea5e9",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Voorbeeldscenario
          </div>

          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "60px",
            }}
          >
            Meer vakantie voor hetzelfde budget
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "300px",
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <strong>Mallorca</strong>
                <p>6 dagen</p>
              </div>
            </div>

            <div
              style={{
                width: "300px",
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff"
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <strong>Griekenland</strong>
                <p>8 dagen</p>
              </div>
            </div>

            <div
              style={{
                width: "300px",
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                border: "3px solid #0ea5e9",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <strong>Turkije</strong>
                <p>10 dagen</p>
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: "25px",
              fontWeight: 600,
            }}
          >
            Budget €1.000 per persoon • Flexibel tussen 10 juli en 20 augustus
          </p>

          <p
            style={{
              marginTop: "15px",
              color: "#64748b",
              fontSize: "0.9rem",
            }}
          >
            Illustratief voorbeeld. Werkelijke prijzen, beschikbaarheid en
            reisduur verschillen per periode en aanbieder.
          </p>
        </section>

        <footer
          style={{
            background: "#0f172a",
            color: "white",
            padding: "60px",
            textAlign: "center",
          }}
        >
          <h3>VacationWeb</h3>

          <p style={{ marginTop: "15px" }}>info@vacationweb.be</p>
          <p>info@vacationweb.nl</p>
        </footer>
      </main>
    </>
  );
}
