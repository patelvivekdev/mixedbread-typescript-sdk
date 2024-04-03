/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const InvalidMatryoshkaModelError: core.serialization.ObjectSchema<
    serializers.InvalidMatryoshkaModelError.Raw,
    MixedbreadAI.InvalidMatryoshkaModelError
> = core.serialization.object({
    type: core.serialization.stringLiteral("invalid_matryoshka_model_error").optional(),
    details: core.serialization.lazy(async () => (await import("..")).MxbaiApiErrorDetails).optional(),
    message: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace InvalidMatryoshkaModelError {
    interface Raw {
        type?: "invalid_matryoshka_model_error" | null;
        details?: serializers.MxbaiApiErrorDetails.Raw | null;
        message?: string | null;
        url?: string | null;
    }
}