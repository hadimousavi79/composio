/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface InvalidMagicLinkTokenError {
    /** The error name */
    name: "InvalidMagicLinkTokenError";
    /** HTTP status code */
    status: number;
    /** Error message */
    message: string;
    /** Request ID, used for tracing the request. This is very helpful for internal teams to debug issues. */
    requestId: string;
    /** Additional arguments that caused the error */
    details: Record<string, unknown>;
    /** The type of error */
    type: "BadRequestError";
}
