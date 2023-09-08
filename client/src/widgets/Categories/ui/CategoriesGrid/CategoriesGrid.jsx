import { categoriesApi } from "@/entities/categories/api/categoriesApi.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import clsx from "clsx";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import css from "./CategoriesGrid.module.css";

const CategoriesGrid = () => {
  const dispatch = useDispatch();
  const limit = 5;

  const columnDefs = useMemo(
    () => [
      { field: "id", maxWidth: 60 },
      { field: "name", minWidth: 250 },
      { field: "description", flex: 1 },
      {
        field: "createdAt",
        valueFormatter: ({ value }) => new Date(value).toLocaleDateString(),
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      wrapText: true,
      resizable: true,
    }),
    []
  );

  const handleGridReady = useCallback(({ api }) => {
    const dataSource = {
      getRows: async (params) => {
        try {
          const { data, totalCount } = await dispatch(
            categoriesApi.endpoints.getAllCategories.initiate({
              limit,
              page: params.endRow / limit,
            })
          ).unwrap();

          params.successCallback(data, totalCount);
        } catch (e) {
          console.error("ошибка при запросе строк", e);
        }
      },
    };
    api.setDatasource(dataSource);
  }, []);

  return (
    <div className={css.categoriesGridWrapper}>
      <AgGridReact
        className={clsx(css.categoriesGrid, "ag-theme-alpine")}
        columnDefs={columnDefs}
        onGridReady={handleGridReady}
        defaultColDef={defaultColDef}
        rowModelType="infinite"
        rowBuffer={0}
        cacheBlockSize={limit}
        cacheOverflowSize={2}
        maxConcurrentDatasourceRequests={1}
        maxBlocksInCache={10}
      />
    </div>
  );
};

export default CategoriesGrid;
