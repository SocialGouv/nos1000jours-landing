import React from "react";

export function Header() {
  return (
    <header style={{ height: 700, overflow: "hidden" }}>
     
      <div
        
        style={{
          height: "100%",
          backgroundImage: `url(/img/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div style={{ position: "absolute", top: 150, width: "100%" }}>
        <div className="container h-100">
          <div className="row h-100">
            <div
              className="col-lg-8 my-auto"
              style={{
                background: "rgb(66,66,66,0.5)",
                borderRadius: 10,
                padding: "2em",
              }}
            >
              <div style={{ color: "white" }}>
                <h1 className="mb-5">
                  <b>1000 premiers jours</b>
                </h1>
                <h3>
                    Le compagnon privilégié des 1000 premiers jours
                </h3>
                Un service proposé par le ministère de la Santé et des solidarités
                en collaboration avec les professionnels de santé et les parents
                <br />
                <br />
                <div>
                  <table align="center" cellPadding={10}>
                    <tr>
                      <td>
                        <a
                          href="https://apps.apple.com/us/app/mon-suivi-psy/id1540061393"
                          target="noopener noreferrer"
                        >
                          <img width={200} src="/img/dnl_apple.png" alt="Lien pour télécharger l'application sur l'Apple store" />
                        </a>
                      </td>
                      <td>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.monsuivipsy&hl=fr&gl=US"
                          target="noopener noreferrer"
                        >
                          <img width={200} src="/img/dnl_google.png" alt="Lien pour télécharger l'application sur le Google store" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                      <img width={149} src="/img/QR_apple.png" alt="QR code pour l'Apple store" />
              
                      </td>
                      <td align="center">
                        <img width={149} src="/img/QR_google.png" alt="QR code pour le Google store" />
                      </td>
                    </tr>
                  </table>
                </div>

                <div>
                  
                </div>

              </div>
            </div>
            <div className="col-lg-4 my-auto d-none d-lg-block">
              <img
                src="/img/demo-screen-1.png"
                className="img-fluid"
                alt=""
                width={300}
                height={580}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
