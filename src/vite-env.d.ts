/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GOOGLE_MAPS_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }