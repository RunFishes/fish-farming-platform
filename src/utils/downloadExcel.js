import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';

const useExport = (list) => {
  const workSheet = XLSX.utils.json_to_sheet(list);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet1');
  const excelBuffer = XLSX.write(workBook, {
    bookType: 'xlsx',
    type: 'array',
  });
  const blob = new Blob([excelBuffer], {
    type: 'application/vnd.ms-excel',
  });
  FileSaver.saveAs(blob, '表格数据');
};

const downloadExcel = async (column, data) => {
  console.log(column);
  console.log(data);
  const list = [];
  list.push(column.map((item) => item.label));
  data.forEach((item) => {
    list.push(
      column.map((ele) => {
        return item[ele.key];
      })
    );
  });
  useExport(list);
};

export default downloadExcel;
