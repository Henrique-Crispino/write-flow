"use client";

import { useMutation } from "convex/react";
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

interface RenameDialogProps {
    documentId: Id<"documents">;
    initialTitle: string;
    children: React.ReactNode;
}

export const RenameDialog =({ documentId, initialTitle, children }: RenameDialogProps) => {
    const update = useMutation(api.documents.updateById);
    const [isUpdating, setIsUpdating] = useState(false);

    const [title, setTitle] = useState(initialTitle);
    const [open, setOpen] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdating(true);

        update({ id: documentId, title: title.trim() || "Documento sem título" })
            .finally(() => {
                setIsUpdating(false);
                setOpen(false);
            });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>Renomear documento</DialogTitle>
                        <DialogDescription>
                            Insira o novo nome para este documento.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-4">
                        <Input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Novo nome"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <DialogFooter>
                        <Button 
                            type="button"
                            variant={"ghost"}
                            disabled={isUpdating}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            disabled={isUpdating}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Salvar
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};