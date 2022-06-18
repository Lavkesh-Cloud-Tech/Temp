import * as React from "react";
import "../styles/style.css";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export interface ISearchProps {
  onChangeSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: ISearchProps) {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const { onChangeSearchQuery } = props;
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    if (debouncedSearchQuery !== undefined) {
      onChangeSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onChangeSearchQuery]);

  return (
    <div>
      <input
        onChange={(event) => setSearchQuery(event.target.value)}
        className="nosubmit"
        type="search"
        placeholder="Type to search..."
      />
    </div>
  );
}