"use client";

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/table";

type Props = {
    columns: {
        key: string;
        label: string
    }[],
    rows: {
        key: string;
        [key: string]: any;
    }[]
};

export default function SlpTable({ columns, rows }: Props) {
    return (
        <Table aria-label="table">
            <TableHeader>
                {columns.map((column) =>
                <TableColumn className="font-bold" key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody>
                {rows.map((row) =>
                <TableRow key={row.key}>
                    {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
