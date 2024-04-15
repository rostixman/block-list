import { useBlockItems } from "@/features/block-list/model/use-block-items";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "@/features/block-list/ui/block-item";

type BlockListProps = {
  className?: string;
};

export function BlockList({ className }: BlockListProps) {
  const { isPending, q, setQ, items } = useBlockItems();

  const isLoader = isPending;
  const isEmptyText = !isPending && items.length === 0;
  const isItems = items.length > 0;
  return (
    <div className={className}>
      <UiTextField
        className="mb-2"
        label="Search..."
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />

      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
        {isLoader && <UiSpinner className="text-teal-600 w-10 h-10 mx-auto" />}
        {isEmptyText && (
          <div className="text-xl py-1 text-center">List is Empty...</div>
        )}
        {isItems && items?.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
