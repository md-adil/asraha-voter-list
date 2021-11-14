import { ICard } from "../types";
import classes from "./card.module.css";

interface IProps {
    card: ICard;
}
export function Card({card}: IProps) {
    return (
        <div className={classes.container}>
            <div className={classes.spaceBetween}>
                <span className={classes.epicNo}>
                    {card.epic_no}
                </span>
                <span className={classes.id}>{card.id}</span>
            </div>
            
            <h3 className={classes.title}>
                <div>{card.name_eng}</div>
                <div>({card.name_hindi})</div>
            </h3>
            <div className={classes.spaceBetween}>
                <span>
                    Age: {card.age}
                </span>
                <span>
                    Source: {card.source}
                </span>
                {card.status && <span>Status: {card.status}</span>}
            </div>
            <div>
                <div>
                    Father / Husband:
                </div>
                <div>
                    <div>{card.father_husband_name_eng}</div>
                    <div>({card.father_husband_name_hindi})</div>
                </div>
            </div>
            <div className={classes.wards}>
                <span>
                    Ward: {card.ward_no}
                </span>
                <span>
                    Ward SN: {card.sl_no_in_ward}
                </span>
            </div>
        </div>
    )
}