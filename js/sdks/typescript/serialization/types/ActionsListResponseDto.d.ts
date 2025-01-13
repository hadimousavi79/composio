/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
import { ActionDetails } from "./ActionDetails";
export declare const ActionsListResponseDto: core.serialization.ObjectSchema<serializers.ActionsListResponseDto.Raw, ComposioApi.ActionsListResponseDto>;
export declare namespace ActionsListResponseDto {
    interface Raw {
        items: ActionDetails.Raw[];
        page: number;
        totalPages: number;
    }
}
