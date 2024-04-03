/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const InternalError: core.serialization.ObjectSchema<serializers.InternalError.Raw, MixedbreadAI.InternalError> =
    core.serialization.object({
        type: core.serialization.stringLiteral("server_error").optional(),
        details: core.serialization.lazy(async () => (await import("..")).MxbaiApiErrorDetails).optional(),
        message: core.serialization.string().optional(),
        url: core.serialization.string().optional(),
    });

export declare namespace InternalError {
    interface Raw {
        type?: "server_error" | null;
        details?: serializers.MxbaiApiErrorDetails.Raw | null;
        message?: string | null;
        url?: string | null;
    }
}