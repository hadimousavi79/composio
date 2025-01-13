/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as ComposioApi from "../../../../../api/index";
import * as core from "../../../../../core";
export declare const ActionGetNlaInputsReqDto: core.serialization.Schema<serializers.ActionGetNlaInputsReqDto.Raw, ComposioApi.ActionGetNlaInputsReqDto>;
export declare namespace ActionGetNlaInputsReqDto {
    interface Raw {
        text: string;
        customDescription?: string | null;
        systemPrompt?: string | null;
    }
}
