"use client";

import Image from 'next/image'
import Link from 'next/link'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { 
    BoldIcon,
    FileIcon,
    FileJsonIcon, 
    FilePenIcon, 
    FilePlusIcon, 
    FileTextIcon, 
    GlobeIcon, 
    ItalicIcon, 
    PrinterIcon, 
    Redo2Icon, 
    RemoveFormattingIcon, 
    StrikethroughIcon, 
    TextIcon, 
    TrashIcon, 
    UnderlineIcon, 
    Undo2Icon } from 'lucide-react'
import { BsFilePdf } from 'react-icons/bs'

import { Avatars } from './avatars';

import { Inbox } from './inbox';

import { useEditorStore } from '@/store/use-editor-store';

import { DocumentInput } from './document-input'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from '@/components/ui/menubar'

import logo from '../../../../public/logo.png'

export const Navbar = () => {
    const { editor } = useEditorStore();

    const insertTable = ({ rows, cols }: {rows: number, cols: number}) => {
        editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run();
    };

    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    };

    const onSaveJSON = () => {
        if (!editor) return;

        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)], { type: 'application/json' });
        onDownload(blob, `document.json`); // TODO: Usar o nome do documento
    };

    const onSaveHTML = () => {
        if (!editor) return;

        const content = editor.getHTML();
        const blob = new Blob([ content ], { type: 'text/html' });
        onDownload(blob, `document.html`); // TODO: Usar o nome do documento
    };

    const onSaveText = () => {
        if (!editor) return;

        const content = editor.getText();
        const blob = new Blob([JSON.stringify(content)], { type: 'application/plain' });
        onDownload(blob, `document.txt`); // TODO: Usar o nome do documento
    };

    return (
        <nav className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <Link href={'/'}>
                    <Image src={logo} alt="logo" width={36} height={36} />
                </Link>
                <div className='flex flex-col'>
                    <DocumentInput />
                    <div className='flex'>
                        <Menubar className='border-none bg-transparent shadow-none h-auto p-0'>
                            <MenubarMenu>
                                <MenubarTrigger>
                                    Arquivo
                                </MenubarTrigger>
                                <MenubarContent className='print:hidden'>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <FileIcon className='size-4 mr-2'/>
                                            Salvar
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={onSaveJSON}>
                                                <FileJsonIcon className='size-4 mr-2'/>
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveHTML}>
                                                <GlobeIcon className='size-4 mr-2'/>
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem onClick={() => window.print}>
                                                <BsFilePdf className='size-4 mr-2'/>
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveText}>
                                                <FileTextIcon className='size-4 mr-2'/>
                                                Text
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <FilePlusIcon className='size-4 mr-2'/>
                                        Novo arquivo
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <FilePenIcon className='size-4 mr-2'/>
                                        Renomear
                                    </MenubarItem>
                                    <MenubarItem>
                                        <TrashIcon className='size-4 mr-2'/>
                                        Excluir
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className='size-4 mr-2'/>
                                        Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                        Editar
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                            <Undo2Icon className='size-4 mr-2'/>
                                            Desfazer <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
                                            <Redo2Icon className='size-4 mr-2'/>
                                            Refazer <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                        Inserir
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarSub>
                                            <MenubarSubTrigger>Tabela</MenubarSubTrigger>
                                            <MenubarSubContent>
                                                <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
                                                    1 x 1
                                                </MenubarItem>
                                                <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
                                                    2 x 2
                                                </MenubarItem>
                                                <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
                                                    3 x 3
                                                </MenubarItem>
                                                <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
                                                    4 x 4
                                                </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                        Formatar
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarSub>
                                            <MenubarSubTrigger>
                                                <TextIcon className='size-4 mr-2'/>
                                                Texto
                                            </MenubarSubTrigger>
                                            <MenubarSubContent>
                                                <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                                                    <BoldIcon className='size-4 mr-2'/>
                                                    Negrito <MenubarShortcut>Ctrl+B</MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                                                    <ItalicIcon className='size-4 mr-2'/>
                                                    Itálico <MenubarShortcut>Ctrl+I</MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                                                    <UnderlineIcon className='size-4 mr-2'/>
                                                    Sublinhado <MenubarShortcut>Ctrl+U</MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem onClick={() => editor?.chain().focus().toggleStrike    ().run()}>
                                                    <StrikethroughIcon className='size-4 mr-2'/>
                                                    <span>Tachado&nbsp;&nbsp;</span> <MenubarShortcut>Alt+Shift+5</MenubarShortcut>
                                                </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>
                                        <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                                            <RemoveFormattingIcon className='size-4 mr-2'/>
                                            Limpar formatação
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 items-center pl-6">
                <Avatars />
                <Inbox />
                <OrganizationSwitcher
                    afterCreateOrganizationUrl={"/"}
                    afterLeaveOrganizationUrl={"/"}
                    afterSelectOrganizationUrl={"/"}
                    afterSelectPersonalUrl={"/"}
                />
                <UserButton />
            </div>
        </nav>
    )
}