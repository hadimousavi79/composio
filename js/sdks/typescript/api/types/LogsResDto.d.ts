/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface LogsResDto {
    /** The cursor to get the next page of logs */
    nextCursor?: string;
    /** Logs data */
    data: Record<string, unknown>[];
}
