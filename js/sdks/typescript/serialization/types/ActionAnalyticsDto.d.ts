/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
import { ActionByAppDto } from "./ActionByAppDto";
import { ActionByStatusDto } from "./ActionByStatusDto";
export declare const ActionAnalyticsDto: core.serialization.ObjectSchema<serializers.ActionAnalyticsDto.Raw, ComposioApi.ActionAnalyticsDto>;
export declare namespace ActionAnalyticsDto {
    interface Raw {
        date: string;
        byApp: ActionByAppDto.Raw;
        byStatus: ActionByStatusDto.Raw;
    }
}
