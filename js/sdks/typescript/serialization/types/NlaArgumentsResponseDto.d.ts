/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const NlaArgumentsResponseDto: core.serialization.ObjectSchema<serializers.NlaArgumentsResponseDto.Raw, ComposioApi.NlaArgumentsResponseDto>;
export declare namespace NlaArgumentsResponseDto {
    interface Raw {
        arguments?: Record<string, unknown> | null;
        error?: string | null;
    }
}
