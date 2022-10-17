import Block from './BlockItem'

const BlockList = ({ blocks }) => {
    return (
        <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
            {blocks.map(block => (
                <Block
                    key={block._id}
                    block={block}
                />
            ))}

        </section>
    )
}

export default BlockList
