import Question from "./Question";
export interface QueryOptions {
    questions: Question[];
}
export default class Query {
    questions: Question[];
    constructor(options: QueryOptions);
}
