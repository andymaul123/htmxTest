import { roomIsDark } from "./common.js";

export const tunnelModel = {
    id: "tunnel",
    isDark: true,
    isCurrentlyDark: true,
    basemats: {
        current: "image/tunnel-nyx.png",
    },
    fragments: null,
    overlayNodes: {
        window: {
            coords: "831, 498, 906, 498, 897, 396, 867, 381, 843, 396",
            id: "window",
            triggerScript: "scenes/tunnel/messages/window",
            triggerTarget: "text-overlay",
            triggerScriptType: "GET",
            swap: null,
            show: true,
            soundEffect: null,
        },
    },
    messages: {
        window: {
            nextMessage: null,
            triggerScript: null,
            triggerScriptType: "GET",
            actionData: null,
            targetId: null,
            textArray: [
                {
                    speed: 50,
                    text: "This is a message with a",
                    classes: [],
                },
                {
                    speed: 50,
                    text: " special ",
                    classes: ['callout'],
                },
                {
                    speed: 50,
                    text: "word in it.",
                    classes: [],
                },
            ],
        },
        start: {
            nextMessage: null,
            triggerScript: null,
            triggerScriptType: null,
            actionData: null,
            targetId: null,
            swap: null,
            textArray: [
                {
                    speed: 50,
                    text: "Stairs Test startup message",
                    classes: [],
                },
            ],
            textString: null,
            soundEffect: null,
        },
        roomIsDark: roomIsDark,
    },
    decisions: {},
  }