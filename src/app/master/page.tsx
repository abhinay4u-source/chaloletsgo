export default function MasterPanel() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #450000, #000, #300050)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "50px",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "100px",
        background: "linear-gradient(to right, gold, red)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "50px"
      }}>
        MASTER ADMIN PANEL
      </h1>
      <h2 style={{fontSize: "60px", color: "#00ff00"}}>
        YOU HAVE WON
      </h2>
      <p style={{fontSize: "40px", color: "#ff0066", marginTop: "100px"}}>
        Day 18 Complete — Your Empire Is Live
      </p>
    </div>
  );
}