import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
  ScrollText,
  Database,
  BookUser,
  KeyRound,
  MenuIcon,
  User,
  Settings,
  LogOut,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "April - Terminal Inventory System",
  description: "April - Terminal Inventory System",
  // icons: {
  //   icon: ['/favicon.ico?v=4'],
  //   shortcut: ['/favicon.ico'],
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  function getTime() {

    const now = new Date()
    const day = now
    const time = now.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });


    return time

  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-17 items-center border-b px-4 lg:h-[140px] lg:px-6">
                <Link href="/dashboard/inventory-status" className="flex flex-col items-start gap-2 font-semibold">
                  <Image
                    src="/img/logo-april.png"
                    alt="Image"
                    width="140"
                    height="140"
                  />
                  <b className="text-xs font-bold">Terminal Inventory System</b>

                  <span className="text-xs font-medium ">Buatan Port</span>
                </Link>


                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  {/* <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary  bg-muted"
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link> */}
                  <Accordion type="single" collapsible className=" rounded-lg px-3 py-2 text-muted-foreground transition-all ">
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="hover:text-primary hover:no-underline">
                        <span className="flex items-center gap-3">
                          <Home className="h-4 w-4" />
                          Dashboard
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                          <Link
                            href="/dashboard/terminal-in-out"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-primary hover:text-primary bg-muted"
                          >

                            Terminal In/Out
                          </Link>
                          <Link
                            href="/dashboard/inventory-status"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >

                            Invetory Status
                          </Link>
                        </nav>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="hover:text-primary hover:no-underline ">
                        <span className="flex items-center gap-3">
                          <ScrollText className="h-4 w-4" />
                          Transaction
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                          <Link
                            href="/transaction/incoming"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary"
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Incoming
                          </Link>
                          <Link
                            href="/transaction/outgoing"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Outgoing
                          </Link>
                          <Link
                            href="/transaction/weighing"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Weighing
                          </Link>
                        </nav>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="hover:text-primary hover:no-underline">
                        <span className="flex items-center gap-3">
                          <Database className="h-4 w-4" />
                          Master Data
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                          <Link
                            href="master-data/material"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Material
                          </Link>
                          <Link
                            href="master-data/yard-manager"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Yard Manager
                          </Link>
                          <Link
                            href="master-data/vessel-master"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Vessel Master
                          </Link>
                          <Link
                            href="master-data/truck-master"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Truck Master
                          </Link>
                        </nav>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="hover:text-primary hover:no-underline">
                        <span className="flex items-center gap-3">
                          <BookUser className="h-4 w-4" />
                          Human Resource
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                          <Link
                            href="/human-resource/terminal"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Terminal
                          </Link>
                          <Link
                            href="/human-resource/employee"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Employee
                          </Link>
                          <Link
                            href="/human-resource/role"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                          >
                            {/* <Home className="h-4 w-4" /> */}
                            Role
                          </Link>

                        </nav>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </nav>
              </div>

            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Accordion type="single" collapsible className=" rounded-lg px-3 py-2 text-muted-foreground transition-all ">
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="hover:text-primary hover:no-underline">
                          <span className="flex items-center gap-3">
                            <Home className="h-4 w-4" />
                            Dashboard
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                              href="/dashboard/terminal-in-out"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-primary hover:text-primary bg-muted"
                            >

                              Terminal In/Out
                            </Link>
                            <Link
                              href="/dashboard/inventory-status"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >

                              Invetory Status
                            </Link>
                          </nav>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-none">
                        <AccordionTrigger className="hover:text-primary hover:no-underline ">
                          <span className="flex items-center gap-3">
                            <ScrollText className="h-4 w-4" />
                            Transaction
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                              href="/transaction/incoming"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary"
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Incoming
                            </Link>
                            <Link
                              href="/transaction/outgoing"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Outgoing
                            </Link>
                            <Link
                              href="/transaction/weighing"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Weighing
                            </Link>
                          </nav>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-none">
                        <AccordionTrigger className="hover:text-primary hover:no-underline">
                          <span className="flex items-center gap-3">
                            <Database className="h-4 w-4" />
                            Master Data
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                              href="master-data/material"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Material
                            </Link>
                            <Link
                              href="master-data/yard-manager"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Yard Manager
                            </Link>
                            <Link
                              href="master-data/vessel-master"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Vessel Master
                            </Link>
                            <Link
                              href="master-data/truck-master"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Truck Master
                            </Link>
                          </nav>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-none">
                        <AccordionTrigger className="hover:text-primary hover:no-underline">
                          <span className="flex items-center gap-3">
                            <BookUser className="h-4 w-4" />
                            Human Resource
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                              href="/human-resource/terminal"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Terminal
                            </Link>
                            <Link
                              href="/human-resource/employee"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Employee
                            </Link>
                            <Link
                              href="/human-resource/role"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Role
                            </Link>

                          </nav>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </nav>

                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <div>
                  {getTime()}
                </div>

              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <Card className="flex flex-row pt-6 w-full h-full items-center content-center justify-center">
                      <CardContent className="flex flex-row w-full h-full items-center gap-3">

                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-bold">Haikal Alatas</span>
                          <span className="text-muted-foreground text-xs">SYSTEM ADMIN</span>
                        </div>
                        <Link href="/" className="absolute right-10 ">
                          <LogOut className="h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>


                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Tabs defaultValue="profile" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="profile" className="gap-2"> <User className="h-4 w-4" /> Profile</TabsTrigger>
                      <TabsTrigger value="setting" className="gap-2"> <Settings className="h-4 w-4" />Setting</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                      <Link href="#" className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary hover:bg-muted">
                        <User className="h-4 w-4" />
                        Profile Info
                      </Link>
                    </TabsContent>
                    <TabsContent value="setting">
                      <Link href="/reset-password" className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary hover:bg-muted">
                        <KeyRound className="h-4 w-4" />
                        Reset Password
                      </Link>
                      <Link href="#" className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary hover:bg-muted">
                        <MenuIcon className="h-4 w-4" />
                        Platform Menu
                      </Link>
                    </TabsContent>
                  </Tabs>

                </DropdownMenuContent>
              </DropdownMenu>
            </header>


            {children}


          </div>
        </div>
      </body>
    </html>
  );
}
