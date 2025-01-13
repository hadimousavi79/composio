/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as ComposioApi from "../../../../index";
/**
 * @example
 *     {}
 */
export interface ActionExecutionReqDto {
    /** Connected account uuid for the account you want to run the action on. You can get this from the id field in [/api/v1/connectedAccounts](/api-reference/connections/list-connections) endpoint. */
    connectedAccountId?: string;
    /** The name/id of the app that the action belongs to. To get the app name, you can use the [/api/v1/apps](/api-reference/apps/list-apps) endpoint. */
    appName?: string;
    /** (Optional) EntityId that represents your users connections - if the required connection is availabe for the user, it'll be auto-picked. If you are passing this, there's no need to pass `connectedAccountId`. To know more about entityId, [click here](https://backend.composio.dev/patterns/Auth/connected_account#entities) */
    entityId?: string;
    /** Action inputs or aguments to execute the action. This is a dict/map with key-value structure, depdning on the action schema you can find in [/api/v2/actions/{actionName}](/api-reference/actions/get-single-action) endpoint. */
    input?: Record<string, unknown>;
    sessionInfo?: ComposioApi.SessionInfoDto;
    authConfig?: ComposioApi.CustomAuthDto;
    /** The use-case description for the action, this will give context to LLM to generate the correct inputs for the action. */
    text?: string;
    /** The custom description for the action, use this to provide customised context about the action to the LLM to suit your use-case. */
    customDescription?: string;
    /** The system prompt to be used by LLM, use this to control and guide the behaviour of the LLM. */
    systemPrompt?: string;
    /** Version of the action you want to execute. */
    version?: string;
}
