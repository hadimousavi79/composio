/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ComposioApi from "../../../index";
export declare namespace Actions {
    interface Options {
        environment?: core.Supplier<environments.ComposioApiEnvironment | string>;
        apiKey: core.Supplier<string>;
        /** Override the x-org-api-key header */
        orgApiKey: core.Supplier<string>;
    }
    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the x-org-api-key header */
        orgApiKey?: string;
    }
}
export declare class Actions {
    protected readonly _options: Actions.Options;
    constructor(_options: Actions.Options);
    /**
     * List action enums
     *
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.actions.listActionEnums()
     */
    listActionEnums(requestOptions?: Actions.RequestOptions): Promise<unknown>;
    /**
     * List all the action tags available in composio
     *
     * @param {ComposioApi.ListActionTagsRequest} request
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.actions.listActionTags()
     */
    listActionTags(request?: ComposioApi.ListActionTagsRequest, requestOptions?: Actions.RequestOptions): Promise<ComposioApi.ActionsTagsResponseDto>;
    /**
     * List and filter all the actions available in composio, with all the details needed for manual action execution or through function-calling.
     *
     * @param {ComposioApi.ActionsListActionsV2Request} request
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.actions.listActionsV2()
     */
    listActionsV2(request?: ComposioApi.ActionsListActionsV2Request, requestOptions?: Actions.RequestOptions): Promise<ComposioApi.ActionsListResponseDto>;
    /**
     * Retrieve a list of all actions based on query parameters.
     *
     * @param {ComposioApi.ActionsListActionsMinimalV2Request} request
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ComposioApi.BadRequestError}
     *
     * @example
     *     await client.actions.listActionsMinimalV2()
     */
    listActionsMinimalV2(request?: ComposioApi.ActionsListActionsMinimalV2Request, requestOptions?: Actions.RequestOptions): Promise<ComposioApi.ActionsListResponseDto>;
    /**
     * Execute an action. Support both connected account and no auth auth.
     *
     * @param {string} actionId
     * @param {ComposioApi.ActionExecutionReqDto} request
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ComposioApi.BadRequestError}
     *
     * @example
     *     await client.actions.executeActionV2("actionId")
     */
    executeActionV2(actionId: string, request?: ComposioApi.ActionExecutionReqDto, requestOptions?: Actions.RequestOptions): Promise<ComposioApi.ActionExecutionResDto>;
    /**
     * Get the inputs for an action with NLA
     *
     * @param {string} actionId
     * @param {ComposioApi.ActionGetNlaInputsReqDto} request
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.actions.getActionInputsV2("actionId", {
     *         text: "text"
     *     })
     */
    getActionInputsV2(actionId: string, request: ComposioApi.ActionGetNlaInputsReqDto, requestOptions?: Actions.RequestOptions): Promise<ComposioApi.NlaArgumentsResponseDto>;
    /**
     * Get action details, including the input and response schema. This is very useful for setting upfunction/tool calling with composio actions.
     *
     * @param {string} actionId
     * @param {ComposioApi.ActionsGetActionV2Request} request
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ComposioApi.NotFoundError}
     *
     * @example
     *     await client.actions.getActionV2("actionId")
     */
    getActionV2(actionId: string, request?: ComposioApi.ActionsGetActionV2Request, requestOptions?: Actions.RequestOptions): Promise<ComposioApi.ActionDetails>;
    /**
     * Use composio as a http client to make request to the connected account service on your behalf, without managing authentication on your side.
     *
     * @param {ComposioApi.ActionProxyRequestConfigDto} request
     * @param {Actions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.actions.executeActionProxyV2({
     *         connectedAccountId: "connectedAccountId",
     *         endpoint: "endpoint",
     *         method: ComposioApi.ActionProxyRequestConfigDtoMethod.Get,
     *         parameters: [{
     *                 name: "name",
     *                 in: ComposioApi.ParameterIn.Query,
     *                 value: "value"
     *             }]
     *     })
     */
    executeActionProxyV2(request: ComposioApi.ActionProxyRequestConfigDto, requestOptions?: Actions.RequestOptions): Promise<ComposioApi.ActionExecutionResDto>;
    protected _getCustomAuthorizationHeaders(): Promise<{
        "x-api-key": string;
    }>;
}
