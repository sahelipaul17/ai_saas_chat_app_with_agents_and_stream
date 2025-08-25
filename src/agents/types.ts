import type { User,Channel,StreamChat } from "stream-chat";


export type AIAgent = {
    user?: User;
    channel?: Channel;
    chatClient?: StreamChat;
    getLastInteraction:() => number
    init : () => Promise<void>
    dispose : () => Promise<void>
}

export enum AgentPlatform{
    GEMINI = "GEMINI",
    WRITING_ASSISTANT = "WRITING_ASSISTANT"
}

export interface WritingMessage{
    custom?:{
        suggestion?:string[];
        writingTask?:string;
        messageType?:"user_input" | "assistant_response"|"system_message";
    }
}