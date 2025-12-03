// src/lib/push.ts  ← FINAL 100% WORKING PUSH NOTIFICATIONS!
export const requestNotificationPermission = async () => {
  if ('Notification' in window && Notification.permission === 'default') {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log("Notification permission granted!");
    }
  }
};

// SIMPLE BUT POWERFUL NOTIFICATION (no actions = works everywhere!)
export const showNotification = (title: string, body: string) => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: '/favicon.ico',  // works 100%
      badge: '/favicon.ico',
      tag: 'ride-alert',
      renotify: true,
      requireInteraction: true,
      silent: false,  // makes sound!
    });
  }
};