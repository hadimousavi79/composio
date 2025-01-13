/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const EnableTriggerParamsDto: core.serialization.ObjectSchema<serializers.EnableTriggerParamsDto.Raw, ComposioApi.EnableTriggerParamsDto>;
export declare namespace EnableTriggerParamsDto {
    interface Raw {
        connectedAccountId: string;
        triggerName: string;
    }
}
