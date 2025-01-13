/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as ComposioApi from "../index";
/**
 * Team Member information
 */
export interface MemberInfoResDto {
    /** The ID/UUID of the member. */
    id: string;
    /** The ID/UUID of the organization to which the member belongs. */
    orgId: string;
    /** The email address of the member. */
    email: string;
    /** The name of the member. */
    name: string;
    /** The role of the member. */
    role: ComposioApi.MemberInfoResDtoRole;
    /** The metadata of the member. This store some additional information about the member. */
    metadata?: Record<string, unknown>;
    /** The date and time when the member was created. */
    createdAt: ComposioApi.MemberInfoResDtoCreatedAt;
    /** The date and time when the member was last updated. */
    updatedAt: ComposioApi.MemberInfoResDtoUpdatedAt;
    /** The date and time when the member was deleted. */
    deletedAt?: ComposioApi.MemberInfoResDtoDeletedAt;
}
