/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
import { AppInfoResponseDtoCreatedAt } from "./AppInfoResponseDtoCreatedAt";
import { AppInfoResponseDtoUpdatedAt } from "./AppInfoResponseDtoUpdatedAt";
export declare const AppInfoResponseDto: core.serialization.ObjectSchema<serializers.AppInfoResponseDto.Raw, ComposioApi.AppInfoResponseDto>;
export declare namespace AppInfoResponseDto {
    interface Raw {
        appId: string;
        key: string;
        name: string;
        description: string;
        logo: string;
        categories: string;
        tags?: string | null;
        auth_schemes?: unknown | null;
        enabled: boolean;
        no_auth?: boolean | null;
        createdAt: AppInfoResponseDtoCreatedAt.Raw;
        updatedAt: AppInfoResponseDtoUpdatedAt.Raw;
    }
}
