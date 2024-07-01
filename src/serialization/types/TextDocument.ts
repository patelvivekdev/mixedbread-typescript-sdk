/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";

export const TextDocument: core.serialization.ObjectSchema<serializers.TextDocument.Raw, MixedbreadAI.TextDocument> =
    core.serialization.object({
        type: core.serialization.stringLiteral("text").optional(),
        text: core.serialization.string(),
    });

export declare namespace TextDocument {
    interface Raw {
        type?: "text" | null;
        text: string;
    }
}
