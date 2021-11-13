import { useMemo } from "react";

export function useListPagination<T>(list: T[], page = 1, perPage = 50) {
    return useMemo(() => {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        return [list.slice(start, end), Math.ceil(list.length / perPage)] as const;
    }, [list, page, perPage]);
}
