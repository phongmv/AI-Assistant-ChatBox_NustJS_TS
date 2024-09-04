import {useState} from "#app";

export const useIsChatting = () => useState("isChatting", () => false)
export const useMessages = () => useState("messages", () => [])