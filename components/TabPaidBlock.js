import { useApp } from "../context"

const tabs = [
    { name: 'All', current: true },
    { name: 'Premium', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {

    function onClickTab(tab) {
        setShowPremiumBlocks(!showPremiumBlocks)
        tabs.map((tab) => tab.current = !tab.current)

    }
    const { showPremiumBlocks, setShowPremiumBlocks, } = useApp()

    return (
        <div>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                    {tabs.map((tab, index) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current
                                    ? 'border-orange-500 text-orange-500'
                                    : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                ' border-b-2 py-4 px-1 text-center text-sm font-medium grow'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                            onClick={() => onClickTab(tab.name)}
                        >
                            {tab.name}
                            {index === 1 && <i className="pl-2 text-orange-500 fa-solid fa-star"></i>}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}
