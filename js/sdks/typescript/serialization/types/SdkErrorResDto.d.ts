/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const SdkErrorResDto: core.serialization.ObjectSchema<serializers.SdkErrorResDto.Raw, ComposioApi.SdkErrorResDto>;
export declare namespace SdkErrorResDto {
    interface Raw {
        status: string;
    }
}
