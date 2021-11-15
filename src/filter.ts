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
        return cards.filter((card: any) => {
            return types.every(t => isMatched(t, card, query))
        });
    }, [cards, ...types.map(x => query[x])]);
}

function isMatched(type: string, card: Record<string, string>, query: Record<string, string>) {
    if (!query[type]) {
        return true;
    }
    if (type === "ward_no") {
        return card[type] == query[type];
    }
    if (type === "epic_no") {
        return matchById(card as any, query[type]);
    }
    return card[type].toLowerCase().includes(query[type].toLowerCase())
}

function matchById(card: ICard, ids: string) {
    return ids.split(",").some(id => card.epic_no.endsWith(id.trim()));
}