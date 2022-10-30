import Block from "./BlockItem";
import { useApp } from "../context";

const BlockList = ({ blocks }) => {
    console.log(444, blocks)
    const { tags, search, filters } = useApp();
    console.log(333, filters)

    return (
        <>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {blocks
                    .filter(({ description, title, tags }) => {
                        if (search.length > 0) {
                            const regex = new RegExp(search.normalize('NFD').replace(/[\u0300-\u036f]/g, ""), "ig");
                            return regex.test(description) || regex.test(title) || regex.test(tags?.map((tag) => tag.value));
                        }
                        return true;
                    })
                    .filter((block) => {
                        // cada block tiene un array de tags [{value}] <-
                        let found = tags.length === 0;
                        block.tags.forEach((tag) => {
                            if (tags.includes(tag.label) && !found) found = true;
                        });
                        return found;
                    })
                    .filter((block) => {
                        let founds = filters.length === 0;
                        block.filters.forEach((filter) => {
                            if (filters.includes(filter.value) && !founds) {
                                founds = true;
                            };
                        });
                        return founds;
                    })
                    .map((block) => (
                        <Block key={block._id} block={block} />
                    ))}
            </section>
        </>
    );
};

export default BlockList;
