/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";
import { MxbaiApiErrorDetails } from "./MxbaiApiErrorDetails";

export const InternalError: core.serialization.ObjectSchema<serializers.InternalError.Raw, MixedbreadAI.InternalError> =
    core.serialization.object({
        type: core.serialization.stringLiteral("server_error").optional(),
        url: core.serialization.string().optional(),
        message: core.serialization.string().optional(),
        details: MxbaiApiErrorDetails.optional(),
    });

export declare namespace InternalError {
    interface Raw {
        type?: "server_error" | null;
        url?: string | null;
        message?: string | null;
        details?: MxbaiApiErrorDetails.Raw | null;
    }
}
