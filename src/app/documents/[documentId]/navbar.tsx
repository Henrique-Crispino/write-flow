"use client";

import Image from 'next/image'
import Link from 'next/link'
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
                                            <MenubarItem>
                                                <FileJsonIcon className='size-4 mr-2'/>
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem>
                                                <GlobeIcon className='size-4 mr-2'/>
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem>
                                                <BsFilePdf className='size-4 mr-2'/>
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem>
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
                                        <MenubarItem>
                                            <Undo2Icon className='size-4 mr-2'/>
                                            Desfazer <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem>
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
                                                <MenubarItem>
                                                    1 x 1
                                                </MenubarItem>
                                                <MenubarItem>
                                                    2 x 2
                                                </MenubarItem>
                                                <MenubarItem>
                                                    3 x 3
                                                </MenubarItem>
                                                <MenubarItem>
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
                                                <MenubarItem>
                                                    <BoldIcon className='size-4 mr-2'/>
                                                    Negrito <MenubarShortcut>Ctrl+B</MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem>
                                                    <ItalicIcon className='size-4 mr-2'/>
                                                    Itálico <MenubarShortcut>Ctrl+I</MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem>
                                                    <UnderlineIcon className='size-4 mr-2'/>
                                                    Sublinhado <MenubarShortcut>Ctrl+U</MenubarShortcut>
                                                </MenubarItem>
                                                <MenubarItem>
                                                    <StrikethroughIcon className='size-4 mr-2'/>
                                                    <span>Tachado&nbsp;&nbsp;</span> <MenubarShortcut>Alt+Shift+5</MenubarShortcut>
                                                </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>
                                        <MenubarItem>
                                            <RemoveFormattingIcon className='size-4 mr-2'/>
                                            Limpar formatação
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
        </nav>
    )
}