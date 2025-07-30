import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pj1',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: 'body' // 📌 ou 'native', 'none', 'ionic' selon le rendu voulu
    }
  }
};

export default config;
