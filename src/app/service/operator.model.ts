export interface Rate {
    number_prefix: string;
    cost: number;
}
export interface Operator {
    A: Array<Rate>;
    B: Array<Rate>;
}
