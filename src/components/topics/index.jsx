import Topic from "~/components/topics/topic/index.jsx";
import {topics} from "~/utils/consts.jsx";
import SidebarSection from "~/components/sidebar-section/index.jsx";

export default function Topics() {
    return(
        <SidebarSection title="Trends for you"
        more="/trends"
        >
            {topics.map((topic, index) => <Topic item={topic} key={index} />)}

        </SidebarSection>

    )
}