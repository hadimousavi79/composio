/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as ComposioApi from "../../api/index";
import * as core from "../../core";
export declare const Metadata: core.serialization.ObjectSchema<serializers.Metadata.Raw, ComposioApi.Metadata>;
export declare namespace Metadata {
    interface Raw {
        has_completed_onboarding?: boolean | null;
    }
}
