import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [people, setPeople] = useState([{ username: "JanuZz_" }]);

  useEffect(() => {
    console.log("Connecting to server...");
    const socket = io("https://shadow-generated-jodhpur.glitch.me");
    socket.on("connect", () => {
      console.log("Connected to " + socket.id);
    });
    socket.on("queue", (list) => {
      setPeople(list);
      console.log(list);
    });

    return () => {
      socket.removeAllListeners("queue");
    };
  }, []);

  return (
    <>
      <div className="bg-dark rounded p-2 fw-bolder lh-base shadow m-2">
        <p className="text-center fs-3 text-white">Queue</p>
      </div>
      {people.map((person, i) => {
        let outlineColor = "Black";

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
          person.color
        );
        if (result) {
          var r = parseInt(result[1], 16);
          var g = parseInt(result[2], 16);
          var b = parseInt(result[3], 16);

          if (r + g + b < (255 * 3) / 2) {
            outlineColor = "White";
          }
        }

        return (
          <div className="d-flex flex-row justify-content-center align-items-center">
            <p
              className={
                "text-center fs-2 font-weight-bold personName outline" +
                outlineColor
              }
              style={{
                color: person.color,
              }}
            >
              <b>{person.username}</b>{" "}
              {person.mod ? (
                <span
                  className="badge shadow"
                  style={{ backgroundColor: "#ff0000" }}
                >
                  MOD
                </span>
              ) : (
                ""
              )}
              <p className="text-center text-white fs-3">{person.ign}</p>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default App;
