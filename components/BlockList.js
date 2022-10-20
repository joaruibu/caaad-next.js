import Block from "./BlockItem";
import { useApp } from "../context";

const BlockList = ({ blocks }) => {
    const { tags, search } = useApp();

    return (
        <>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {blocks
                    .filter(({ description, title, categories, tags }) => {
                        if (search.length > 0) {
                            const regex = new RegExp(search, "ig");
                            return regex.test(description) || regex.test(title);
                        }
                        return true;
                    })
                    .filter((block) => {
                        // cada block tiene un array de tags [{value}] <-
                        let found = tags.length === 0;
                        block.tags.forEach((_tag) => {
                            if (tags.includes(_tag.value) && !found) found = true;
                        });
                        return found;
                    })
                    .map((block) => (
                        <Block key={block._id} block={block} />
                    ))}
            </section>
        </>
    );
};

export default BlockList;
