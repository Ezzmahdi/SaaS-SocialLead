
import Navbar2 from "@/components/Contentnavbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";


const DashboardLayout = async ({
    children 
}:{
    children: React.ReactNode;
}) => {

    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0">
                <div>
                    <Sidebar apiLimitCount={apiLimitCount} isPro={isPro ?? false} />
                </div>
            </div>
            <main className="md:pl-72">
                <Navbar2 />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;