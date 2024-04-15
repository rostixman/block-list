import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useRemoveBlockItemMutation } from "@/entities/block-list";

type BlockItemProps = {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
};

export function BlockItem({ id, type, data }: BlockItemProps) {
  const removeBlockListMutation = useRemoveBlockItemMutation();

  return (
    <div className="flex gap-2">
      <div>
        <div className="text-lg"> {data}</div>
        <div className="text-slate-500">{type}</div>
      </div>
      <button
        className="ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50 p-1"
        disabled={removeBlockListMutation.isPending}
        onClick={() => removeBlockListMutation.mutate(id)}
      >
        <Trash className="w-5 h-5" />
      </button>
    </div>
  );
}

type TrashProps = {
  className?: string;
};

const Trash = ({ className }: TrashProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
      />
    </svg>
  );
};
