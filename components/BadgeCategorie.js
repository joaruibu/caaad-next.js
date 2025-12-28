import { allCategories } from "../assets/categories"
import { useApp } from "../context"
import Link from "next/link"


const BadgeCategory = ({ category }) => {
    const { locale } = useApp()


    return (
        <>
            <Link className={`cursorHover inline-flex items-center rounded-full  whitespace-nowrap bg-orange-600 py-0.5 pl-2.5 pr-2.5 font-medium text-white text-xs`}
                href={locale === 'es' ? `/es/category/${category}` : ` /category/${category} `}

            >
                {allCategories.filter(each => each.value === category)[0][locale === 'es' ? 'label_ES' : 'label'].toUpperCase()}

            </Link>
        </>
    )
}

export default BadgeCategory
