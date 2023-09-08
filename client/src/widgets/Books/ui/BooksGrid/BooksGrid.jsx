import { booksApi } from "@/entities/books/index.js";
import { AddBookBtn } from "@/features/addBook/index.js";
import { RemoveBookBtn } from "@/features/removeBook/index.js";
import { UpdateBookBtn } from "@/features/updateBook/index.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import clsx from "clsx";
import { useMemo, useRef, useState } from "react";
import css from "./BooksGrid.module.css";

const BooksGrid = () => {
  const gridRef = useRef();

  const { data } = booksApi.useGetAllBooksQuery();
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleSelectionChanged = () => {
    const selectedRows = gridRef.current?.api.getSelectedRows();
    if (selectedRows.length > 0) {
      setSelectedRowId(selectedRows[0].id);
    } else {
      setSelectedRowId(null);
    }
  };

  const columnDefs = useMemo(
    () => [
      { field: "id", maxWidth: 100 },
      { field: "title", headerName: "Название", flex: 1 },
      { field: "author", headerName: "Автор", flex: 1 },
      { field: "publisher", headerName: "Издательство", flex: 1 },
      { field: "year", headerName: "Год", maxWidth: 100 },
      { field: "rating", headerName: "Оценка", maxWidth: 100 },
      {
        field: "category",
        headerName: "Категория",
        valueFormatter: ({ value }) => value.name,
        flex: 1,
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
    }),
    []
  );

  const getRowId = useMemo(() => {
    return (params) => params.data.id;
  }, []);

  return (
    <div>
      <div className={css.booksGridBtnList}>
        <div className={css.booksGridBtn}>
          <AddBookBtn />
        </div>
        <div className={css.booksGridBtn}>
          <RemoveBookBtn id={selectedRowId} />
        </div>
        <div className={css.booksGridBtn}>
          <UpdateBookBtn id={selectedRowId} />
        </div>
      </div>

      <div className={clsx(css.booksGridWrapper, "ag-theme-alpine")}>
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          getRowId={getRowId}
          onSelectionChanged={handleSelectionChanged}
          rowSelection="single"
        />
      </div>
    </div>
  );
};

export default BooksGrid;
