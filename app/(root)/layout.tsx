import MobileNav from '@/components/shared/MobileNav'
import { Toaster } from '@/components/ui/toaster'
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";


const Layout = async ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
      <div className="h-full relative">
          <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0">
              <div>
                  <Sidebar apiLimitCount={apiLimitCount} isPro={isPro || false} />
              </div>
          </div>
          <main className="p-10 md:pl-72">
              {children}
          </main>

          <Toaster />
      </div>
  )
}

export default Layout