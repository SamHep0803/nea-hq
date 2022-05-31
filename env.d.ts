declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VATSIM_CLIENT_ID: string;
      VATSIM_CLIENT_SECRET: string;
      VATSIM_URL: string;
      VATSIM_SCOPES: string;
      VATSIM_CALLBACK_URL: string;
      SESSION_SECRET: string;
    }
  }
}

export {}
