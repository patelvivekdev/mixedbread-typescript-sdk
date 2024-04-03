/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const NotFoundErrorBody: core.serialization.ObjectSchema<
    serializers.NotFoundErrorBody.Raw,
    MixedbreadAI.NotFoundErrorBody
> = core.serialization.object({
    type: core.serialization.stringLiteral("not_found_error").optional(),
    details: core.serialization.lazy(async () => (await import("..")).MxbaiApiErrorDetails).optional(),
    message: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace NotFoundErrorBody {
    interface Raw {
        type?: "not_found_error" | null;
        details?: serializers.MxbaiApiErrorDetails.Raw | null;
        message?: string | null;
        url?: string | null;
    }
}