import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
           <Skeleton className="h-[400px] w-full rounded-xl" />
           <div className="space-y-4">
             <Skeleton className="h-4 w-3/4" />
             <Skeleton className="h-4 w-full" />
             <Skeleton className="h-4 w-5/6" />
           </div>
        </div>
        <div className="lg:col-span-4 space-y-6">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <Skeleton className="h-[200px] w-full rounded-xl" />
        </div>
      </div>
    </div>
  )
}