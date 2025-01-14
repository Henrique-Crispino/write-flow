"use client";

import { 
    LucideIcon,
    Undo2Icon, 
    Redo2Icon, 
    PrinterIcon, 
    SpellCheckIcon, 
    BoldIcon, 
    ItalicIcon, 
    UnderlineIcon,
    MessageSquarePlusIcon,
    ListTodoIcon,
    RemoveFormattingIcon,
    ChevronDownIcon
} from "lucide-react";
import { Level } from "@tiptap/extension-heading";

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeadingLevelButton = () => {
    const { editor } = useEditorStore();

    const headings = [
        { label: "Normal text", value: 0, fontSize: "16px" },
        { label: "Título 1", value: 1, fontSize: "32px" },
        { label: "Título 2", value: 2, fontSize: "24px" },
        { label: "Título 3", value: 3, fontSize: "20px" },
        { label: "Título 4", value: 4, fontSize: "18px" },
        { label: "Título 5", value: 5, fontSize: "16px" },
    ];

    const getCurrentHeading = () => {
        for (let level = 1; level <= 5; level++) {
            if (editor?.isActive(`heading`, { level })) {
                return `Título ${level}`;
            }
        }

        return "Texto normal";
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm" 
                >
                    <span className="truncate">
                        {getCurrentHeading()}
                    </span>
                    <ChevronDownIcon className="ml-2 size-4 shrink-0"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {headings.map(({ label, value, fontSize }) => (
                    <button
                        key={value}
                        style={{ fontSize }}
                        onClick={() => {
                            if (value === 0) {
                                editor?.chain().focus().setParagraph().run();
                            } else {
                                editor?.chain().focus().toggleHeading({ level: value as Level }).run();
                            }
                        }}
                        className={cn(
                            "flex item-center gap-x-2 px-2 py-1 font-[value] rounded-sm hover:bg-neutral-200/80",
                            (value === 0 && !editor?.isActive("heading")) || editor?.isActive("heading", { level: value }) && "bg-neutral-200/80"
                        )}
                    >
                        {label}
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const FontFamilyButton = () => {
    const { editor } = useEditorStore();

    const fonts = [
            { label: "Arial", value: "Arial" },
            { label: "Helvetica", value: "Helvetica" },
            { label: "Times New Roman", value: "Times New Roman" },
            { label: "Times", value: "Times" },
            { label: "Courier New", value: "Courier New" },
            { label: "Courier", value: "Courier" },
            { label: "Verdana", value: "Verdana" },
            { label: "Georgia", value: "Georgia" },
            { label: "Palatino", value: "Palatino" },
            { label: "Garamond", value: "Garamond" },
            { label: "Bookman", value: "Bookman" },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm" 
                >
                    <span className="truncate">
                        {editor?.getAttributes("textStyle").fontFamily || "Arial"}
                    </span>
                    <ChevronDownIcon className="ml-2 size-4 shrink-0"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                { fonts.map(({ label, value }) => (
                    <button
                        onClick={() => editor?.chain().focus().setFontFamily(value).run()}
                        key={value}
                        className={cn(
                            "flex item-center gap-x-2 px-2 py-1 font-[value] rounded-sm hover:bg-neutral-200/80",
                            editor?.getAttributes("textStyle").fontFamily === value && "bg-neutral-200/80"
                        )}
                        style={{ fontFamily: value }}
                    >
                        <span className="text-sm">
                            {label}
                        </span>
                    </button>
                ))}:
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon
}

const ToolbarButton = ({
    onClick,
    isActive,
    icon: Icon,
}: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                isActive && "bg-neutral-200/80"
            )}
        >
            <Icon className="size-4"/>
        </button>
    )
}

export const Toolbar = () => {
    const { editor } = useEditorStore();

    const sections: { 
        label: string;
        icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean; 
    }[][] = [
        [
            {
            label: "Undo",
            icon: Undo2Icon,
            onClick: () => editor?.chain().focus().undo().run(),
            }, 
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run(),
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print(),
            },
            {
                label: "Spellcheck",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
                },
            }
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run(),
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                isActive: editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().toggleItalic().run(),
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                isActive: editor?.isActive("underline"),
                onClick: () => editor?.chain().focus().toggleUnderline().run(),
            }
        ],
        [
            {
                label: "Comment",
                icon: MessageSquarePlusIcon,
                onClick: () => console.log("Comment"),
                isActive: false, //Todo: Enable this func
            },
            {
                label: "List Todo",
                icon: ListTodoIcon,
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
                isActive: editor?.isActive("taskList"),
            },
            {
                label: "Remove Formatting",
                icon: RemoveFormattingIcon,
                onClick: () => editor?.chain().focus().unsetAllMarks().run(),
            },
        ]
    ];

    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 roundend-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            <FontFamilyButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            <HeadingLevelButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* Todo: Font size */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {sections[1].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            {/* Todo: Text color */}
            {/* Todo: Highlight color */}
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {/* Todo: Link */}
            {/* Todo: Image */}
            {/* Todo: Align */}
            {/* Todo: Line height */}
            {/* Todo: List */}
            {sections[2].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}

        </div>
    )
}