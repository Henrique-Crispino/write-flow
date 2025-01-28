import { PaginationStatus } from "convex/react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { LoaderIcon } from "lucide-react";
import { DocumentRow } from "./document-row";

import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentsTableProps {
    documents: Doc<"documents">[] | undefined;
    loadMore: (numItems: number) => void;
    status: PaginationStatus;
}

export const DocumentsTable =  ({ documents, loadMore, status }: DocumentsTableProps) => {
    return (
        <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
            {documents === undefined ? (
                <div className="flex justify-center items-center h-24">
                    <LoaderIcon className="animate-spin text-muted-foreground size-5"/>
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead>Nome</TableHead>
                            <TableHead>&nbsp;</TableHead>
                            <TableHead className="hidden md:table-cell">Compartilhado</TableHead>
                            <TableHead className="hidden md:table-cell">Criado em:</TableHead>
                        </TableRow>
                    </TableHeader>
                    {documents.length === 0 ? (
                        <TableBody>
                            <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                                    Nenhum documento encontrado
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ) : (
                        <TableBody>
                            {documents.map((document) => (
                                <DocumentRow key={document._id} document={document} />
                            ))}
                        </TableBody>
                    )}
                </Table>
            )}
        </div>
    )
}