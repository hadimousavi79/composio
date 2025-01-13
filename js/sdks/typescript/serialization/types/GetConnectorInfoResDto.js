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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConnectorInfoResDto = void 0;
const core = __importStar(require("../../core"));
const ExpectedInputFieldsDto_1 = require("./ExpectedInputFieldsDto");
exports.GetConnectorInfoResDto = core.serialization.object({
    id: core.serialization.string().optional(),
    authScheme: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    createdAt: core.serialization.string().optional(),
    updatedAt: core.serialization.string().optional(),
    enabled: core.serialization.boolean(),
    deleted: core.serialization.boolean().optional(),
    appId: core.serialization.string(),
    defaultConnectorId: core.serialization.string().optional(),
    authConfig: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    expectedInputFields: core.serialization.list(ExpectedInputFieldsDto_1.ExpectedInputFieldsDto),
    logo: core.serialization.string(),
    appName: core.serialization.string(),
    useComposioAuth: core.serialization.boolean(),
});
