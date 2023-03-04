import { useApp } from "../context";
import BlockItem from "./BlockItem";

const BlockList = ({ blocks }) => {
    console.log(blocks)
    const { tags, search, filters, locale } = useApp();
    return (
        <>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {blocks
                    .reverse()
                    .filter(({ description, description_ES, title, title_ES, tags }) => {
                        if (search.length > 0) {
                            const regex = new RegExp(search.normalize('NFD').replace(/[\u0300-\u036f]/g, ""), "ig");
                            return regex.test(locale === 'es' ? `${description_ES}` : `${description}`) || regex.test(locale === 'es' ? `${title_ES}` : `${title}`) || regex.test(tags?.map((tag) => tag));
                        }
                        return true;
                    })
                    .filter((block) => {
                        if (tags.length > 0) {
                            let found = false
                            block.tags.forEach((tag) => {
                                if (tags.includes(tag)) found = true
                            })
                            return found
                        } else {
                            return true
                        }
                    })

                    .filter((block) => {
                        let founds = filters.length === 0;
                        block.filters.forEach((filter) => {
                            if (filters.includes(filter) && !founds) {
                                founds = true;
                            };
                        });
                        return founds;
                    })
                    .map((block) => (
                        <BlockItem key={block._id} block={block} />
                    ))}
            </section>
        </>
    );
};

export default BlockList;
