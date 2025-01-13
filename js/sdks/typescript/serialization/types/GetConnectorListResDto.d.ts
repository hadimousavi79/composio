/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const GetConnectorListResDto: core.serialization.ObjectSchema<serializers.GetConnectorListResDto.Raw, ComposioApi.GetConnectorListResDto>;
export declare namespace GetConnectorListResDto {
    interface Raw {
        items: Record<string, unknown>[];
        totalPages: number;
        page: number;
    }
}
