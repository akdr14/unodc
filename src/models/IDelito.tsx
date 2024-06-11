interface IDelito {
    id: string;
    title: string;
    type: string;
    relations: Array<Relation>;
}

interface Relation {
    type : string;
    relatedPostsIds : Array<string>;
};

export default IDelito;