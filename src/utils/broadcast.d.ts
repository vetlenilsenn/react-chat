import { SessionOptions } from '../types';
import { BaseRequest } from '@voiceflow/dtos-interact';

export declare enum BroadcastType {
    SAVE_SESSION = "voiceflow:save_session",
    INTERACT = "voiceflow:interact",
    OPEN = "voiceflow:open",
    CLOSE = "voiceflow:close"
}
export interface BroadcastMessage {
    type: BroadcastType;
    payload?: unknown;
}
export interface SaveSession extends BroadcastMessage {
    type: BroadcastType.SAVE_SESSION;
    payload: SessionOptions;
}
export interface Interact extends BroadcastMessage {
    type: BroadcastType.INTERACT;
    payload: {
        session: SessionOptions;
        action: BaseRequest;
    };
}
export interface Open extends BroadcastMessage {
    type: BroadcastType.OPEN;
}
export interface Close extends BroadcastMessage {
    type: BroadcastType.CLOSE;
}
export type AnyMessage = SaveSession | Interact | Open | Close;
export declare const broadcast: (message: AnyMessage) => void;
//# sourceMappingURL=broadcast.d.ts.map