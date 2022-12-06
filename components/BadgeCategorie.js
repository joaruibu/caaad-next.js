import { allCategories } from "../assets/categories"
import { useApp } from "../context"


const BadgeCategory = ({ category }) => {
    const { locale } = useApp()


    return (
        <>
            <a className={`inline-flex items-center rounded-full  whitespace-nowrap bg-orange-600 py-0.5 pl-2.5 pr-2.5 font-medium text-white text-xs`}
                href={locale === 'es' ? `/es/category/${category}` : ` /category/${category} `}

            >
                {allCategories.filter(each => each.value === category)[0][locale === 'es' ? 'label_ES' : 'label'].toUpperCase()}

            </a>
        </>
    )
}

export default BadgeCategory

