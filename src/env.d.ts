/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_KEEN_PROJECT: string;
    readonly VITE_KEEN_WRITE: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }