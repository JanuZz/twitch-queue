import { useEffect, useState } from "react";
import { io } from "socket.io-client";

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
        <p className="text-center fs-2 text-white">Queue</p>
      </div>
      {people.map((person, i) => {
        console.log(person.mod);
        return (
          <div className="d-flex flex-row justify-content-center align-items-center">
            <p
              className="text-center fs-2 font-weight-bold"
              style={{ color: person.color, textShadow: "0 0 10px white" }}
            >
              {person.username}{" "}
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
              <p className="text-center text-muted fs-4">{person.ign}</p>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default App;
