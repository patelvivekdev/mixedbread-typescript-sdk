/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";
import { TextDocument } from "./TextDocument";

export const Query: core.serialization.Schema<serializers.Query.Raw, MixedbreadAI.Query> =
    core.serialization.undiscriminatedUnion([TextDocument, core.serialization.string()]);

export declare namespace Query {
    type Raw = TextDocument.Raw | string;
}
