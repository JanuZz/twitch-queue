import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    console.log("Connecting to server...");
    const socket = io("https://shadow-generated-jodhpur.glitch.me");
    socket.on("connect", () => {
      console.log("Connected to " + socket.id);
      setConnected(true);
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
        <p className="text-center fs-5 text-white">
          {connected ? "Queue" : "Connecting..."}
        </p>
        <p className="text-center fs-4 text-muted font-weight-light">
          Total: {people.length.toFixed(0)}
        </p>
      </div>
      <div className="d-flex flex-column justify-content-start align-items-center">
        {people.map((person, i) => {
          return (
            <div className="d-flex flex-row align-items-center">
              {person.mod ? (
                <span
                  className="badge shadow"
                  style={{ backgroundColor: "#ff0000" }}
                >
                  MOD
                </span>
              ) : (
                <></>
              )}
              <p
                className="fs-2 font-weight-bold px-3 personName"
                style={{
                  color: person.color,
                }}
              >
                <b>{person.username}</b>
              </p>
              <p className="text-center text-white fs-3">{person.ign}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
