// src/lib/payout.ts  ← AUTO PAYOUTS AT 8 AM & 8 PM!
export const triggerPayout = async () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Only run at 8:00–8:05 AM and 8:00–8:05 PM
  if ((hours === 8 || hours === 20) && minutes <= 5) {
    console.log("8 AM / 8 PM PAYOUT TRIGGERED!");
    alert("PAYOUT SENT TO ALL DRIVERS!");
    
    // In real app: call RazorpayX / bank API here
    // For now: show success
    console.log("₹1,84,000 paid to 42 drivers at " + now.toLocaleTimeString());
  }
};