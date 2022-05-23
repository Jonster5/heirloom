import TlItem from '@components/TLItem.svelte';

export interface Item {
    title: string;
    timePeriod: string;

    bgImage: string;

    text: string;

    brightness?: number;
}

export async function loadItems(input: string): Promise<Item[]> {
    try {
        const itemList = await fetch(input).then((res) => res.json());
        const items: Item[] = await Promise.all(
            itemList.map(async (item) => {
                return {
                    ...item,
                    text: await loadText(item.text),
                } as Item;
            })
        );

        return items;
    } catch (err) {
        console.error(err);
    }
}

async function loadText(input: string): Promise<string> {
    try {
        const response = await fetch(`/text/${input}`);
        return await response.text();
    } catch (err) {
        console.error(err);
    }
}
