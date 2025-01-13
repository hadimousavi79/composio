/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
import { Parameter } from "./Parameter";
export declare const CustomAuthDto: core.serialization.ObjectSchema<serializers.CustomAuthDto.Raw, ComposioApi.CustomAuthDto>;
export declare namespace CustomAuthDto {
    interface Raw {
        base_url?: string | null;
        parameters: Parameter.Raw[];
        body?: Record<string, unknown> | null;
    }
}
