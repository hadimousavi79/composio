/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const TriggerLogItemDtoTriggerType: core.serialization.Schema<serializers.TriggerLogItemDtoTriggerType.Raw, ComposioApi.TriggerLogItemDtoTriggerType>;
export declare namespace TriggerLogItemDtoTriggerType {
    type Raw = "poll" | "webhook";
}
