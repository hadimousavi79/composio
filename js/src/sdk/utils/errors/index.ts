import { TELEMETRY_URL } from "../constants";
import ComposioSDKContext from "../composioContext";
import { sendBrowserReq, sendProcessReq } from "../../../utils/external";

type ErrorPayload = {
    error_id: string,
    error_code: string,
    original_error: string,
    description: string,
    message: string,
    possible_fix: string,
    current_stack: string[],
}

export async function logError(payload: ErrorPayload) {
    try {
        const isBrowser = typeof window !== 'undefined';
        const reportingPayload = await generateReportingPayload(payload);
        const reqPayload = {
            reportingPayload,
            url: `${TELEMETRY_URL}/api/sdk_metrics/error`,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        if (isBrowser) {
            await sendBrowserReq(reqPayload);
        } else {    
            await sendProcessReq(reqPayload);
        }
    } catch (error) {
        console.error("Error sending error to telemetry", error);
        // DO NOTHING
    }
}

async function generateReportingPayload(payload: ErrorPayload) {
    const { apiKey, baseURL, composioVersion, frameworkRuntime, source } = ComposioSDKContext
    const { 
        error_id,
        error_code,
        description,
        message,
        possible_fix,
        original_error,
        current_stack
    } = payload;

    return {
        error_id,
        error_code,
        description,
        error_message: message,
        possible_fix,
        original_error,
        current_stack,
        sdk_meta: {
            platform: process.platform,
            version: composioVersion,
            baseURL,
            apiKey,
            frameworkRuntime,   
            source
        }
    };
}
