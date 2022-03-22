import config from "../next.config";
import { ICard } from "./types";
export async function fetchData(vil = "asraha"): Promise<ICard[]> {
    const response = await fetch(`${config.basePath}/${vil}.json`);
    return response.json();
}
