export interface Rate {
    number_prefix: string;
    cost: number;
}
export interface Operator {
    [operator: string]: Array<Rate>;
}
