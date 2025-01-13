/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
import { MemberResDtoRole } from "./MemberResDtoRole";
export declare const MemberResDto: core.serialization.ObjectSchema<serializers.MemberResDto.Raw, ComposioApi.MemberResDto>;
export declare namespace MemberResDto {
    interface Raw {
        email: string;
        id: string;
        name: string;
        createdAt?: string | null;
        role: MemberResDtoRole.Raw;
        updatedAt?: string | null;
    }
}
