"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triggers = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization/index"));
const errors = __importStar(require("../../../../errors/index"));
class Triggers {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * List triggers
     *
     * @param {ComposioApi.TriggersListTriggersRequest} request
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.listTriggers()
     */
    listTriggers(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { appNames, connectedAccountIds, triggerIds, triggerNames, integrationIds, showEnabledOnly } = request;
            const _queryParams = {};
            if (appNames != null) {
                _queryParams["appNames"] = appNames;
            }
            if (connectedAccountIds != null) {
                _queryParams["connectedAccountIds"] = connectedAccountIds;
            }
            if (triggerIds != null) {
                _queryParams["triggerIds"] = triggerIds;
            }
            if (triggerNames != null) {
                _queryParams["triggerNames"] = triggerNames;
            }
            if (integrationIds != null) {
                _queryParams["integrationIds"] = integrationIds;
            }
            if (showEnabledOnly != null) {
                _queryParams["showEnabledOnly"] = showEnabledOnly.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/triggers"),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.triggers.listTriggers.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * List trigger enums
     *
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.listTriggerEnums()
     */
    listTriggerEnums(requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/triggers/list/enums"),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Update isNewWebhook
     *
     * @param {ComposioApi.WehbookNewFormatDto} request
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.updateNewWebhook({
     *         id: "id",
     *         isNewWebhook: true
     *     })
     */
    updateNewWebhook(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/triggers/update_webhook_format"),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                body: serializers.WehbookNewFormatDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return _response.body;
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Enables a trigger for a connected account and specific trigger name.
     *
     * @param {string} connectedAccountId
     * @param {string} triggerName
     * @param {ComposioApi.EnableTriggerBodyDto} request
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.enableTrigger("connectedAccountId", "triggerName", {
     *         triggerConfig: {
     *             "key": "value"
     *         }
     *     })
     */
    enableTrigger(connectedAccountId, triggerName, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/triggers/enable/${encodeURIComponent(connectedAccountId)}/${encodeURIComponent(triggerName)}`),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                body: serializers.EnableTriggerBodyDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.TriggerResponseDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Lists active triggers based on query parameters.
     *
     * @param {ComposioApi.TriggersGetActiveTriggersRequest} request
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.getActiveTriggers()
     */
    getActiveTriggers(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { connectedAccountIds, integrationIds, triggerIds, triggerNames, page, limit, showDisabled } = request;
            const _queryParams = {};
            if (connectedAccountIds != null) {
                _queryParams["connectedAccountIds"] = connectedAccountIds;
            }
            if (integrationIds != null) {
                _queryParams["integrationIds"] = integrationIds;
            }
            if (triggerIds != null) {
                _queryParams["triggerIds"] = triggerIds;
            }
            if (triggerNames != null) {
                _queryParams["triggerNames"] = triggerNames;
            }
            if (page != null) {
                _queryParams["page"] = page.toString();
            }
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            if (showDisabled != null) {
                _queryParams["showDisabled"] = showDisabled.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/triggers/active_triggers"),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.ActiveTriggersResDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Switches the status of a trigger instance.
     *
     * @param {string} triggerId
     * @param {ComposioApi.SwitchTriggerStatusBodyDto} request
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.switchTriggerInstanceStatus("triggerId", {
     *         enabled: true
     *     })
     */
    switchTriggerInstanceStatus(triggerId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/triggers/instance/${encodeURIComponent(triggerId)}/status`),
                method: "PATCH",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                body: serializers.SwitchTriggerStatusBodyDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.TriggerResponseDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Disables a specified trigger instance.
     *
     * @param {string} triggerInstanceId
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.disableTrigger("triggerInstanceId")
     */
    disableTrigger(triggerInstanceId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/triggers/disable/${encodeURIComponent(triggerInstanceId)}`),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.TriggerResponseDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Deletes a specified trigger instance.
     *
     * @param {string} triggerInstanceId
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.deleteTrigger("triggerInstanceId")
     */
    deleteTrigger(triggerInstanceId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/triggers/instance/${encodeURIComponent(triggerInstanceId)}`),
                method: "DELETE",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.DeleteRowApidto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Sets a universal callback URL for the client.
     *
     * @param {ComposioApi.SetCallbackUrlBodyDto} request
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.setCallbackUrl({
     *         callbackUrl: "callbackURL"
     *     })
     */
    setCallbackUrl(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/triggers/set_callback_url"),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                body: serializers.SetCallbackUrlBodyDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.TriggerResponseDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Retrieves the universal callback URL set for the client.
     *
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.getWebhookUrl()
     */
    getWebhookUrl(requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/triggers/callback_url"),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.WebhookUrlResponseDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Fetches logs based on connection and integration details.
     *
     * @param {ComposioApi.TriggersGetTriggerLogsRequest} request
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.getTriggerLogs()
     */
    getTriggerLogs(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { connectionId, integrationId, page, limit } = request;
            const _queryParams = {};
            if (connectionId != null) {
                _queryParams["connectionId"] = connectionId;
            }
            if (integrationId != null) {
                _queryParams["integrationId"] = integrationId;
            }
            if (page != null) {
                _queryParams["page"] = page.toString();
            }
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/triggers/logs"),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.TriggerLogsResDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * Get Trigger Info
     *
     * @param {string} triggerName
     * @param {Triggers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.triggers.getTriggerInfoV2("triggerName")
     */
    getTriggerInfoV2(triggerName, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v2/triggers/${encodeURIComponent(triggerName)}`),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.triggers.getTriggerInfoV2.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.ComposioApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.ComposioApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.ComposioApiTimeoutError();
                case "unknown":
                    throw new errors.ComposioApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    _getCustomAuthorizationHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiKeyValue = yield core.Supplier.get(this._options.apiKey);
            return { "x-api-key": apiKeyValue };
        });
    }
}
exports.Triggers = Triggers;
