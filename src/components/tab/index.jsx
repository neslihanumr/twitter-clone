import Items from "~/components/tab/items.jsx";
import Item from "~/components/tab/item.jsx";
import Content from "~/components/tab/content.jsx";
import PropTypes from "prop-types";
import {TabContext} from "~/components/tab/context.js";
import {useEffect, useState} from "react";

export default function Tab({ children, activeTab }) {

    const [active, setActive] = useState(activeTab)

    useEffect(() => {
        setActive(activeTab)
    }, [activeTab]);

    const contents = children.filter(c => c.type === Content);
    const items = children.filter(c => c.type === Items);

    const content = contents.find(c => c.props.id === active)

    const data = {
        active,
        setActive
    }

    return(
        <TabContext.Provider value={data}>
            <div className="border-b border-[#2f3336] sticky top-[3.313rem] z-10 bg-black/[.65] backdrop-blur-md">
                {items}
            </div>
            {content}
        </TabContext.Provider>
    );
}

Tab.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
};

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;