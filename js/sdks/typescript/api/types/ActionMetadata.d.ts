/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface ActionMetadata {
    /** The unique id of the log */
    id: string;
    /** The request sent to the provider */
    request: string;
    /** The response from the provider */
    response?: string;
    /** The error request sent to the provider */
    errorRequest?: string;
    /** The type of the log */
    type: string;
    /** The date and time when the log was created */
    createdAt: Date;
    /** The date and time when the log was updated */
    updatedAt: Date;
    /** The provider of the log */
    provider: string;
    /** The client uuid of the log */
    clientId: string;
    /** The connection id of the log */
    connectionId: string;
    /** The action name of the log */
    actionName: string;
}
