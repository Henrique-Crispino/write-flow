"use client";

import { useMutation } from "convex/react";
import { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

export const RemoveDialog =({ documentId, children }: RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = useState(false);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Essa ação não poderá ser desfeita. Seu documento será removido permanentemente.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={isRemoving}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsRemoving(true);
                            remove({ id: documentId})
                                .finally(() => setIsRemoving(false));
                        }}
                    >
                        Excluir
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};