/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const InitiateConnectionResponse: core.serialization.ObjectSchema<serializers.InitiateConnectionResponse.Raw, ComposioApi.InitiateConnectionResponse>;
export declare namespace InitiateConnectionResponse {
    interface Raw {
        connectionStatus: string;
        connectedAccountId: string;
        redirectUrl?: string | null;
    }
}
