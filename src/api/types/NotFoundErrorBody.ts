/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MixedbreadAI from "../index";

export interface NotFoundErrorBody {
    type?: "not_found_error";
    url?: string;
    message?: string;
    details?: MixedbreadAI.MxbaiApiErrorDetails;
}
