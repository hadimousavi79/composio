/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const DeleteApiKeyResponseDto: core.serialization.ObjectSchema<serializers.DeleteApiKeyResponseDto.Raw, ComposioApi.DeleteApiKeyResponseDto>;
export declare namespace DeleteApiKeyResponseDto {
    interface Raw {
        deleted: boolean;
    }
}
