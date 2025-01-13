/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface GetConnectionInfoParams {
    /** UUID of the connected account you want to get auth credentials for. You can get this from the `id` field in the response of the [/api/v1/connectedAccounts](/api-reference/connections/list-connections) endpoint. */
    connectedAccountId: string;
}
