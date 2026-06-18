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
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=80')",
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
              background: "rgba(0,0,0,0.45)",
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
                padding: "0.75rem 1.2rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.4)",
                marginBottom: "2rem",
                backdropFilter: "blur(10px)",
              }}
            >
              ☀️ Een nieuwe manier om vakantie te zoeken
            </div>

            <h1
              style={{
                fontSize: "5.8rem",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-3px",
                marginBottom: "2rem",
              }}
            >
              Meer vakantie
              <br />
              voor jouw budget
            </h1>

            <p
              style={{
                fontSize: "1.35rem",
                lineHeight: 1.8,
                maxWidth: "650px",
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
              }}
            >
              <button
                style={{
                  padding: "1rem 1.8rem",
                  borderRadius: "999px",
                  border: "none",
                  background: "#0ea5e9",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Blijf op de hoogte
              </button>

              <button
                style={{
                  padding: "1rem 1.8rem",
                  borderRadius: "999px",
                  border: "none",
                  background: "white",
                  fontWeight: 700,
                  cursor: "pointer",
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
            background: "#eef8fc",
            padding: "120px 10%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            <div
              style={{
                color: "#0ea5e9",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Waarom VacationWeb?
            </div>

            <h2
              style={{
                fontSize: "5rem",
                lineHeight: 1,
                fontWeight: 800,
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
                maxWidth: "850px",
                margin: "0 auto",
                color: "#64748b",
                fontSize: "1.2rem",
                lineHeight: 1.8,
              }}
            >
              Traditioneel vergelijk je telkens maar één website tegelijk.
              VacationWeb vergelijkt meerdere reispartners vanuit één
              zoekopdracht en toont waar jouw budget de meeste waarde oplevert.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "40px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.7rem",
                  marginBottom: "30px",
                }}
              >
                Traditionele reiswebsites
              </h3>

              <p>① Kies bestemming</p>
              <p>② Vergelijk prijzen</p>
              <p>③ Begin opnieuw</p>
              <p>④ Vergelijk alles zelf</p>
            </div>

            <div
              style={{
                background: "#dff3ff",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid #8fd6ff",
              }}
            >
              <h3
                style={{
                  fontSize: "1.7rem",
                  marginBottom: "30px",
                }}
              >
                VacationWeb
              </h3>

              <p>✓ Geef één keer je voorkeuren in</p>
              <p>✓ Vergelijk meerdere reispartners tegelijk</p>
              <p>✓ Ontdek waar jouw budget het meeste oplevert</p>
              <p>✓ Alles in één overzicht</p>
            </div>
          </div>
        </section>

        {/* VOORBEELD */}

        <section
          style={{
            background: "#eef8fc",
            padding: "100px 10%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#0ea5e9",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Voorbeeldscenario
          </div>

          <h2
            style={{
              fontSize: "3.8rem",
              fontWeight: 800,
              color: "#0f172a",
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
                width: "280px",
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <strong>Mallorca</strong>
                <p>6 dagen</p>
              </div>
            </div>

            <div
              style={{
                width: "280px",
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <strong>Griekenland</strong>
                <p>8 dagen</p>
              </div>
            </div>

            <div
              style={{
                width: "280px",
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                border: "3px solid #0ea5e9",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <strong>Turkije</strong>
                <p>10 dagen</p>
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: "30px",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Budget €1.000 per persoon
          </p>

          <p
            style={{
              marginTop: "10px",
              color: "#64748b",
            }}
          >
            Illustratief voorbeeld. Werkelijke prijzen, beschikbaarheid en
            reisduur verschillen per periode en aanbieder.
          </p>
        </section>

        {/* WAAROM DIT WERKT */}

        <section
          style={{
            background: "#eef8fc",
            padding: "100px 10%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: "50px",
            }}
          >
            Waarom dit werkt
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={card}>Meer mogelijkheden ontdekken</div>
            <div style={card}>Minder tijd verliezen</div>
            <div style={card}>Slimmer vergelijken</div>
            <div style={card}>Meer vakantie beleven</div>
          </div>
        </section>

        {/* FOOTER */}

        <footer
          style={{
            background: "#081530",
            color: "white",
            padding: "70px",
            textAlign: "center",
          }}
        >
          <h3>VacationWeb</h3>

          <p style={{ marginTop: "20px" }}>
            info@vacationweb.be
            <br />
            info@vacationweb.nl
          </p>
        </footer>
      </main>
    </>
  );
}

const card = {
  width: "240px",
  background: "white",
  padding: "35px",
  borderRadius: "20px",
} as const;
