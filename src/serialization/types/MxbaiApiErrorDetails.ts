/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const MxbaiApiErrorDetails: core.serialization.Schema<
    serializers.MxbaiApiErrorDetails.Raw,
    MixedbreadAI.MxbaiApiErrorDetails
> = core.serialization.undiscriminatedUnion([
    core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    core.serialization.list(core.serialization.unknown()),
]);

export declare namespace MxbaiApiErrorDetails {
    type Raw = Record<string, unknown> | unknown[];
}
