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
           
            <div className={classes.fatherName}>
                <div className={classes.para}>
                    Father / <br /> Husband:
                </div>
                <div className={classes.marginLeft}>
                    <div className={classes.para}>{card.father_husband_name_eng}</div>
                    <div className={classes.para}>({card.father_husband_name_hindi})</div>
                </div>
            </div>
            <div className={classes.spaceBetween}>
                <span className={classes.para}>
                    Age: {card.age}
                </span>
                <span className={classes.para}>
                    Source: {card.source}
                </span>
                {card.status && <span className={classes.para}>Status: {card.status}</span>}
            </div>
            <div className={classes.wards}>
                <span className={classes.para}>
                    Ward: {card.ward_no}
                </span>
                <span className={classes.para} style={{fontWeight: 500}}>
                    Ward SN: {card.sl_no_in_ward}
                </span>
            </div>
        </div>
    )
}