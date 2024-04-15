import { useState } from "react";
import { useBlockListQuery } from "@/entities/block-list";
import { useDebouncedValue } from "@/shared/lib/react-std";

export function useBlockItems() {
  const [q, setQ] = useState<string>();

  const blockListQuery = useBlockListQuery({ q: useDebouncedValue(q, 500) });

  const items = blockListQuery.data?.items ?? [];

  return {
    items,
    isPending: blockListQuery.isPending,
    q,
    setQ,
  };
}
