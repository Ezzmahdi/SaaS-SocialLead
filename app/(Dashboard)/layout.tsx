import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";




const DashboardLayout = async ({
    children 
}:{
    children: React.ReactNode;
}) => {
    const apiLimitCount = 0 //await getApiLimitCount();
    const isPro = false //await checkSubscription();

    return (
        <div className="h-full relative">
            <div className="z-10 hidden h-full md:flex md:flex-col md:fixed md:w-[250px] md:inset-y-0">
                <div>
                    <Sidebar apiLimitCount={apiLimitCount || 0} isPro={isPro || false} />
                </div>
            </div>
            <main className="md:pl-[250px]">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;