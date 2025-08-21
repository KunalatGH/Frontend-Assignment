import React, { useState } from "react";
import { DataTableProps } from "./types";
export default DataTable;

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);

  // Sorting logic
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const toggleSort = (key: keyof T) => {
    setSortConfig((prev) =>
      prev?.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const handleSelect = (row: T) => {
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (!data.length) return <p className="text-center">No data available</p>;

  return (
    <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th></th>}
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => col.sortable && toggleSort(col.dataIndex)}
              className={`p-2 text-left cursor-pointer ${col.sortable ? "hover:underline" : ""}`}
              aria-sort={sortConfig?.key === col.dataIndex ? sortConfig.direction : "none"}
            >
              {col.title}
              {sortConfig?.key === col.dataIndex && (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="border-b hover:bg-gray-50">
            {selectable && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => handleSelect(row)}
                  aria-label="Select row"
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
