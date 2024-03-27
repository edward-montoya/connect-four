export interface FieldItem {
    i: number,
    j: number,
    value: PLAYERS | null | undefined,
}

export enum PLAYERS {
    PLAYER_1,
    PLAYER_2
}

export interface PlayerInformation {
    player: PLAYERS
    score: number,
}