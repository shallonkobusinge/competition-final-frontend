const TableHeader = ({ tabs = [], activeTab, changeActiveTab, children }) => {
    return (
        <div className="pt-5 pl-8 flex  justify-around">
            <div>
                {tabs.map((tab) => (
                    <button className={`ml-4 ${activeTab === tab && 'active'}`} onClick={() => changeActiveTab(tab)}>{tab}</button>
                ))}
            </div>
            {children}
        </div>
    )
}

export default TableHeader