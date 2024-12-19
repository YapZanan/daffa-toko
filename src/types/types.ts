// src/types/types.ts

export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error?: { code: string; message: string; details?: any };
  meta?: {
    timestamp: string;
    [key: string]: any;
  };
};
