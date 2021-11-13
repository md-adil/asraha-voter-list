import { useRouter } from "next/dist/client/router";
import { useMemo } from "react";
import { ICard } from "../types";
import classes from "./filters.module.css";

interface IFilterProps {
    card: ICard;
}
export default function Filters(props: IFilterProps) {
    const {query, push} = useRouter();
    const onChange = (e: any) => {
        push(`?${new URLSearchParams({...query, page: '', [e.target.name]: e.target.value})}`, undefined, {shallow: true});
    }
    return (
        <div className={classes.container}>
            <input type="text" placeholder="ID Number" name="epic_no" onChange={onChange} value={query.epic_no} />
            <input type="text" placeholder="Name" name="name_eng" onChange={onChange} value={query.name_eng} />
            <input type="text" placeholder="Spouse Name" name="father_husband_name_eng" onChange={onChange} value={query.father_husband_name_eng} />
            <input type="text" placeholder="Ward Number" name="ward_no" onChange={onChange} value={query.ward_no} />
        </div>
    )
}

interface ISortProps {
    card: ICard;
}
function Sort(props: ISortProps) {
    const options = useMemo(() => {
        const opts = Object.keys(props.card);
        return opts.flatMap(opt => [`${opt} a-z`, `${opt} z-a`])
    }, [props.card])

    return (
        <select>
            {options.map((o) => (
                <option key={o} value={o}>{o}</option>
            ))}
        </select>
    )
}