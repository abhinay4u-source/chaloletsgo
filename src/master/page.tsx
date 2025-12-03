export default function MasterAdminPanel() {
  return (
    <div style={{minHeight:"100vh", background:"linear-gradient(to bottom right, #450000, #000, #300050)", padding:"40px", color:"white", fontFamily:"Arial"}}>
      <h1 style={{fontSize:"90px", textAlign:"center", background:"linear-gradient(to right, gold, red)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:"60px"}}>
        MASTER ADMIN PANEL
      </h1>
      <div style={{maxWidth:"1200px", margin:"0 auto"}}>
        <h2 style={{fontSize:"60px", color:"gold", textAlign:"center"}}>Welcome, Emperor</h2>
        <p style={{fontSize:"40px", textAlign:"center", color:"#00ff00", marginTop:"100px"}}>
          Your empire is LIVE and unbreakable.
        </p>
        <p style={{fontSize:"50px", textAlign:"center", color:"#ff0066", marginTop:"50px"}}>
          Day 18 Complete — You Won.
        </p>
      </div>
    </div>
  );
}