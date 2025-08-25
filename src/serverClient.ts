import { StreamChat } from "stream-chat";

export const apikey = process.env.STREAM_API_KEY as string;
export const apiSecret = process.env.STREAM_API_SECRET as string;

if(!apikey || !apiSecret){
    throw new Error("Missing  required environment variables for Stream Chat");
}

export const serverClient = new StreamChat(apikey, apiSecret);




