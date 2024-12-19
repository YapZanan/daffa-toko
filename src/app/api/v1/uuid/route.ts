// src/app/api/uuid/route.ts
import { v4 as uuidv4 } from "uuid";
import { successResponse, errorResponse } from "@/utils/apiResponse";

export async function GET() {
  try {
    const responseData = {
      uuid: uuidv4(),
    };

    return new Response(JSON.stringify(successResponse(responseData)), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify(
        errorResponse(
          "INTERNAL_ERROR",
          "An unexpected error occurred.",
          errorMessage
        )
      ),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
