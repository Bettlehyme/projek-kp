'use client'

import Link from "next/link"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Edit, FileOutput, KeyRound, Mail, Search, UserPlus2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export default function Employee() {
  const route = useRouter()
  return (

    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
      <div className="flex ">
        <h1 className="text-lg font-semibold md:text-2xl">Employee</h1>
      </div>
      <div
        className="flex flex-1 p-4 rounded-lg border border-dashed shadow-sm " x-chunk="dashboard-02-chunk-1">
        <div className="flex flex-col gap-1 h-fit grid grid-cols-2">
          <div className="flex flex-row gap-1 col-span-2 ">

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 rounded-xl  px-4 py-2 text-primary hover:text-foreground hover:bg-muted"> <UserPlus2 className="h-4 w-4" />
                  Add</Button>
              </DialogTrigger>
              <DialogContent className="w-1/2">
                <DialogHeader>
                  <DialogTitle>Add</DialogTitle>
                  <DialogDescription>
                    Tambah Data
                  </DialogDescription>
                </DialogHeader>
                <form>
                  <div className="grid grid-cols-6 gap-4 py-4">
                    <Input
                      id="sap_id"
                      placeholder="SAP ID"
                      className="col-span-2"
                    />
                    <Input
                      id="username"
                      placeholder="User Name"
                      className="col-span-2"
                    />
                    <Select >
                      <SelectTrigger className="col-span-2">
                        <SelectValue placeholder="Authentication Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Type</SelectLabel>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="LDAP">LDAP</SelectItem>
                          <SelectItem value="APPLICATION">APPLICATION</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Input
                      id="employee_name"
                      placeholder="Employee Name"
                      className="col-span-3"
                    />
                    <Input
                      id="email_address"
                      placeholder="Email Address"
                      className="col-span-3"
                    />
                    <Select >
                      <SelectTrigger className="col-span-2">
                        <SelectValue placeholder="Bussiness Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Unit</SelectLabel>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="RAPP">RAPP</SelectItem>
                          <SelectItem value="PTSI">PTSI</SelectItem>
                          <SelectItem value="APR">APR</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select >
                      <SelectTrigger className="col-span-2">
                        <SelectValue placeholder="is Active" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>is Active</SelectLabel>
                          <SelectItem value="Y">Y</SelectItem>
                          <SelectItem value="N">N</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select >
                      <SelectTrigger className="col-span-2">
                        <SelectValue placeholder="Bussiness Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>is Lock</SelectLabel>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </form>
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 rounded-xl  px-4 py-2 text-primary hover:text-foreground hover:bg-muted">
                  <FileOutput className="h-4 w-4" />
                  Export</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Export</DialogTitle>
                  <DialogDescription>
                    This file will be exported and download it to your computer
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <Button type="submit">Export</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Link href="#" className="flex items-center gap-2 rounded-xl px-4 py-2 text-primary hover:text-foreground hover:bg-muted">

            </Link>

            <div className="relative flex justify-end">
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5  h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2 ">
            <ScrollArea className=" whitespace-nowrap rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>SAP ID</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Name
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      User Name
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Auth Type
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Email
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Bussiness Units
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Is Active
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Is Lock
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Last Login
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      created At
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      updated At
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-accent">
                    <TableCell className="flex flex-row ">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex items-center gap-2 rounded-xl bg-muted text-primary hover:text-foreground hover:bg-muted">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit</DialogTitle>

                          </DialogHeader>
                          <form>
                            <div className="grid grid-cols-6 gap-4 py-4">
                              <Input
                                id="sap_id"
                                placeholder="SAP ID"
                                className="col-span-2"
                              />
                              <Input
                                id="username"
                                placeholder="User Name"
                                className="col-span-2"
                              />
                              <Select >
                                <SelectTrigger className="col-span-2">
                                  <SelectValue placeholder="Authentication Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Type</SelectLabel>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="LDAP">LDAP</SelectItem>
                                    <SelectItem value="APPLICATION">APPLICATION</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <Input
                                id="employee_name"
                                placeholder="Employee Name"
                                className="col-span-3"
                              />
                              <Input
                                id="email_address"
                                placeholder="Email Address"
                                className="col-span-3"
                              />
                              <Select >
                                <SelectTrigger className="col-span-2">
                                  <SelectValue placeholder="Bussiness Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Unit</SelectLabel>
                                    <SelectItem value="None">None</SelectItem>
                                    <SelectItem value="RAPP">RAPP</SelectItem>
                                    <SelectItem value="PTSI">PTSI</SelectItem>
                                    <SelectItem value="APR">APR</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <Select >
                                <SelectTrigger className="col-span-2">
                                  <SelectValue placeholder="is Active" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>is Active</SelectLabel>
                                    <SelectItem value="Y">Y</SelectItem>
                                    <SelectItem value="N">N</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <Select >
                                <SelectTrigger className="col-span-2">
                                  <SelectValue placeholder="Bussiness Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>is Lock</SelectLabel>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </form>
                          <DialogFooter>
                            <Button type="submit">Changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex items-center gap-2 rounded-xl bg-muted text-primary hover:text-foreground hover:bg-muted">
                            <KeyRound className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Lock</DialogTitle>

                          </DialogHeader>
                          Lock the data?
                          <DialogFooter>
                            <Button type="submit">Lock</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Link href="#" >
                        <Button className="flex items-center gap-2 rounded-xl bg-muted text-primary hover:text-foreground hover:bg-muted">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      10026892
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        Haikal Alatas
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      haikal_alatas
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      LDAP
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      haikal20si@mahasiswa.pcr.ac.id
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      BUS_2345545246566
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Y
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      N
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Wednesday, 22 May 2024
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      EMP_3592758927498
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Wednesday, 22 May 2024
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Wednesday, 22 May 2024
                    </TableCell>

                  </TableRow>


                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </main>

  )
}
