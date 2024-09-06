export type TODO = any;

export enum STATE {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum NOTIFICATION_TYPE {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  // WARNING = 'warning',
}

export enum platform {
  WEB = 'web',
  NATIVE = 'native',
}

export enum StorageKey {
  TOKEN = 'token',
}

export interface IToast {
  type: NOTIFICATION_TYPE;
  title?: string;
  message: string;
}
