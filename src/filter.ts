import { useMemo } from "react";
import { ICard } from "./types";

const types = [
    'epic_no',
    'sl_no_in_ward',
    'source',
    'status',
    'name_eng',
    'name_hindi',
    'relation_type',
    'father_husband_name_eng',
    'father_husband_name_hindi',
    'age',
    'ward_no'
] as const;


export function useFilter(cards: ICard[], query: any) {
    return useMemo(() => {
        if (types.every(t => !query[t])) {
            return cards;
        }
        return cards.filter((card: any) => {
            return types.every(t => !query[t] || card[t].toLowerCase().includes(query[t]))
        });
    }, [cards, ...types.map(x => query[x])]);
}