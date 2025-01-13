/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as ComposioApi from "../index";
export interface ActionsQueryV2Dto {
    /** Comma separated list of composio apps to filter by. You can get the list of apps by using [/api/v1/apps](/api-reference/apps/list-apps) endpoint. */
    apps?: string;
    /** Comma separated list of composio actions to filter by. You can get the list of actionIds from this API or you can get it by running `composio actions` command in your terminal. */
    actions?: string;
    /** Comma separated list of composio action tags to filter by. You can get the list of action tags by using [/api/v2/actions/list/tags](/api-reference/actions/list-action-tags) endpoint. */
    tags?: string;
    /** Smart use-case based search for actions needed to be performed as per the use-case. This uses AI to understand the use-case and then finally returns the list of actions. **Note:** If you are using this field, you can not use actions or tags fields. */
    useCase?: string;
    /** Page number to be returned, default is 1 */
    page?: number;
    /** Limit the number of actions to be returned, default is 30 */
    limit?: number;
    /** Filter and return only important actions. This is equivalent to setting tags='important' in the query params mentioned above. */
    filterImportantActions?: boolean;
    /** Sort the actions by usage or alphabetical */
    sortBy?: ComposioApi.ActionsQueryV2DtoSortBy;
}
