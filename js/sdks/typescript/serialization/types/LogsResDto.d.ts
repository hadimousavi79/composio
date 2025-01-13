/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const LogsResDto: core.serialization.ObjectSchema<serializers.LogsResDto.Raw, ComposioApi.LogsResDto>;
export declare namespace LogsResDto {
    interface Raw {
        nextCursor?: string | null;
        data: Record<string, unknown>[];
    }
}
