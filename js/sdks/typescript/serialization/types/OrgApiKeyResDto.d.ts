/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const OrgApiKeyResDto: core.serialization.ObjectSchema<serializers.OrgApiKeyResDto.Raw, ComposioApi.OrgApiKeyResDto>;
export declare namespace OrgApiKeyResDto {
    interface Raw {
        apiKey: string;
    }
}
