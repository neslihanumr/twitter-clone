import StickyHeader from "~/components/sticky-header/index.jsx";
import Tab from "~/components/tab/index.jsx";
import ForYou from "~/pages/home/for-you/index.jsx";


export default function Home(){
    return (
        <>
            <StickyHeader title="Home"/>
            <Tab activeTab="for-you">
                <Tab.Items>
                    <Tab.Item id="for-you">
                        For you
                    </Tab.Item>
                    <Tab.Item id="following">
                        Following
                    </Tab.Item>
                </Tab.Items>
                <Tab.Content id="for-you">
                    <ForYou/>
                </Tab.Content>
                <Tab.Content id="following">
                    2.content
                </Tab.Content>
            </Tab>
        </>
    )
}

