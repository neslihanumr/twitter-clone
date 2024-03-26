import SidebarSection from "~/components/sidebar-section/index.jsx";
import {useAccount} from "~/store/auth/hooks.js";
import {whoFollowUsers} from "~/mock/index.js";
import UserCard from "~/components/user-card/index.jsx";

export default function WhoFollow(){

    const account = useAccount()

    return (
        <SidebarSection
            title="Who to follow"
            more={`/connect_people?user_id=${account.id}`}
        >
            {whoFollowUsers.map((user) => <UserCard user={user} key={user.id}/>)}
        </SidebarSection>
    )
}