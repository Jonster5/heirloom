import { Writable } from 'svelte/store';

export const increment = (c: Writable<number>) => {
    c.update((n) => n + 1);
};

export const decrement = (c: Writable<number>) => {
    c.update((n) => n - 1);
};
