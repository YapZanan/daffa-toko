// src/app/utils/apiResponse.ts

import { ApiResponseSchema } from "@/schemas/apiResponseSchema";
import { ApiResponse } from "@/types/types";
import { getCurrentIsoTimestamp } from "./dateUtils";

export function successResponse<T>(
  data: T,
  meta?: Record<string, any>
): ApiResponse<T> {
  return {
    success: true,
    data,
    meta: { timestamp: getCurrentIsoTimestamp(), ...meta },
  };
}

export function errorResponse(
  code: string,
  message: string,
  details?: any,
  meta?: Record<string, any>
): ApiResponse<null> {
  return {
    success: false,
    data: null,
    error: {
      code,
      message,
      details,
    },
    meta: { timestamp: getCurrentIsoTimestamp(), ...meta },
  };
}
