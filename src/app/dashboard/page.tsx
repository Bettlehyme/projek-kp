'use client'

import Link from "next/link"
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"
import Sidebar from "@/app/component/sidebar";
import HeaderCustom from "@/app/component/header";

export default function dashboard() {
  const route = useRouter()
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <HeaderCustom />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You don't have anything yet
              </h3>
              <p className="text-sm text-muted-foreground">
                Soon this website will be finish
              </p>
              <Button className="mt-4" onClick={()=>{ route.push("/") }}>Logout</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
