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
exports.Connections = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const ComposioApi = __importStar(require("../../../index"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization/index"));
const errors = __importStar(require("../../../../errors/index"));
class Connections {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * Get all connections in the current project.
     *
     * @param {ComposioApi.ConnectionsGetConnectionsRequest} request
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ComposioApi.BadRequestError}
     *
     * @example
     *     await client.connections.getConnections()
     */
    getConnections(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { page, pageSize, appNames, labels, showActiveOnly, status, integrationId, connectionId, userUuid, entityId, showDisabled, } = request;
            const _queryParams = {};
            if (page != null) {
                _queryParams["page"] = page.toString();
            }
            if (pageSize != null) {
                _queryParams["pageSize"] = pageSize.toString();
            }
            if (appNames != null) {
                _queryParams["appNames"] = appNames;
            }
            if (labels != null) {
                _queryParams["labels"] = labels;
            }
            if (showActiveOnly != null) {
                _queryParams["showActiveOnly"] = showActiveOnly.toString();
            }
            if (status != null) {
                _queryParams["status"] = status;
            }
            if (integrationId != null) {
                _queryParams["integrationId"] = integrationId;
            }
            if (connectionId != null) {
                _queryParams["connectionId"] = connectionId;
            }
            if (userUuid != null) {
                _queryParams["user_uuid"] = userUuid;
            }
            if (entityId != null) {
                _queryParams["entityId"] = entityId;
            }
            if (showDisabled != null) {
                _queryParams["showDisabled"] = showDisabled.toString();
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/connectedAccounts"),
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
                return serializers.GetConnectionsResponseDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new ComposioApi.BadRequestError(_response.error.body);
                    default:
                        throw new errors.ComposioApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
     * @param {ComposioApi.InitiateConnectionPayloadDto} request
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ComposioApi.BadRequestError}
     * @throws {@link ComposioApi.NotFoundError}
     *
     * @example
     *     await client.connections.initiateConnection({
     *         data: {
     *             "key": "value"
     *         },
     *         integrationId: "integrationId"
     *     })
     */
    initiateConnection(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, "api/v1/connectedAccounts"),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                body: serializers.InitiateConnectionPayloadDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.InitiateConnectionResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new ComposioApi.BadRequestError(_response.error.body);
                    case 404:
                        throw new ComposioApi.NotFoundError(_response.error.body);
                    default:
                        throw new errors.ComposioApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
     * Update connection data
     *
     * @param {string} connectedAccountId
     * @param {ComposioApi.UpdateConnectionLabelsPayloadDto} request
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.connections.updateConnectionData("connectedAccountId", {
     *         labels: ["labels"]
     *     })
     */
    updateConnectionData(connectedAccountId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/connectedAccounts/${encodeURIComponent(connectedAccountId)}/data`),
                method: "PATCH",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                body: serializers.UpdateConnectionLabelsPayloadDto.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                }),
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
     * Reinitiate an existing connection to get new credentials
     *
     * @param {string} connectedAccountId
     * @param {ComposioApi.ReinitiateConnectionPayloadDto} request
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ComposioApi.NotFoundError}
     *
     * @example
     *     await client.connections.reinitiateConnection("connectedAccountId", {
     *         data: {
     *             "key": "value"
     *         }
     *     })
     */
    reinitiateConnection(connectedAccountId, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/connectedAccounts/${encodeURIComponent(connectedAccountId)}/reinitiate`),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                body: serializers.ReinitiateConnectionPayloadDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.InitiateConnectionResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new ComposioApi.NotFoundError(_response.error.body);
                    default:
                        throw new errors.ComposioApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
     * @param {string} connectedAccountId
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ComposioApi.NotFoundError}
     *
     * @example
     *     await client.connections.getConnection("connectedAccountId")
     */
    getConnection(connectedAccountId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/connectedAccounts/${encodeURIComponent(connectedAccountId)}`),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.ConnectedAccountResponseDto.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new ComposioApi.NotFoundError(_response.error.body);
                    default:
                        throw new errors.ComposioApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
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
     * Delete a connection
     *
     * @param {string} connectedAccountId
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.connections.deleteConnection("connectedAccountId")
     */
    deleteConnection(connectedAccountId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/connectedAccounts/${encodeURIComponent(connectedAccountId)}`),
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
     * Get authentication crdentials for the connected account, i.e all the headers, query parameters, etc. that are required to make requests to the third-party service directly.
     *
     * @param {string} connectedAccountId
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.connections.getConnectionInfo("connectedAccountId")
     */
    getConnectionInfo(connectedAccountId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/connectedAccounts/${encodeURIComponent(connectedAccountId)}/info`),
                method: "GET",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.GetConnectionInfoResponseDto.parseOrThrow(_response.body, {
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
     * Disable a connection
     *
     * @param {string} connectedAccountId
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.connections.disableConnection("connectedAccountId")
     */
    disableConnection(connectedAccountId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/connectedAccounts/${encodeURIComponent(connectedAccountId)}/disable`),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.ToggleConnectedAccountResponseDto.parseOrThrow(_response.body, {
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
     * Enable a connection
     *
     * @param {string} connectedAccountId
     * @param {Connections.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.connections.enableConnection("connectedAccountId")
     */
    enableConnection(connectedAccountId, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.ComposioApiEnvironment.Default, `api/v1/connectedAccounts/${encodeURIComponent(connectedAccountId)}/enable`),
                method: "POST",
                headers: Object.assign({ "x-org-api-key": yield core.Supplier.get(this._options.orgApiKey), "X-Fern-Language": "JavaScript", "X-Fern-Runtime": core.RUNTIME.type, "X-Fern-Runtime-Version": core.RUNTIME.version }, (yield this._getCustomAuthorizationHeaders())),
                contentType: "application/json",
                requestType: "json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
                abortSignal: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.abortSignal,
            });
            if (_response.ok) {
                return serializers.ToggleConnectedAccountResponseDto.parseOrThrow(_response.body, {
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
exports.Connections = Connections;
