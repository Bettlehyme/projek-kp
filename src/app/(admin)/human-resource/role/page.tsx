'use client'

import Link from "next/link"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Edit, FileOutput, FilePlus2, KeyRound, Mail, Search, Trash2, UserPlus2 } from "lucide-react";
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

export default function role() {
  const route = useRouter()
  return (

    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
      <div className="flex ">
        <h1 className="text-lg font-semibold md:text-2xl">Role</h1>
      </div>
      <div
        className="flex flex-1 p-4 rounded-lg border border-dashed shadow-sm w-full" x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row gap-1 w-full">

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 rounded-xl  px-4 py-2 text-primary hover:text-foreground hover:bg-muted"> <FilePlus2 className="h-4 w-4" />
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
                      id="role_name"
                      placeholder="Role Name"
                      className="col-span-2"
                    />
                    <Input
                      id="role_desc"
                      placeholder="Role Desc"
                      className="col-span-2"
                    />
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

            <div className="relative w-full flex justify-end">
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Id</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Bussiness Unit Name
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  Bussiness Unit Desc
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Is Active
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Created
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  created At
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
                            id="role_name"
                            placeholder="Role Name"
                            className="col-span-2"
                          />
                          <Input
                            id="role_desc"
                            placeholder="Role Desc"
                            className="col-span-2"
                          />
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
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Delete</DialogTitle>

                      </DialogHeader>
                      Delete this data?
                      <DialogFooter>
                        <Button type="submit" >Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  RFL_341245264
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    AUDITOR
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  Auditor
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  Y
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  EMP_38098590244
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  2023-12-20 14:15:40
                </TableCell>


              </TableRow>


            </TableBody>
          </Table>
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
    </main>

  )
}
