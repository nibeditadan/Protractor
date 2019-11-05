var XLSX=require('xlsx')
class ExcelReader{

     readDataFrom_Excel(sheet, filePath) {
        var workBook=XLSX.readFile(filePath);
        var workSheet=workBook.SheetNames;
        return XLSX.utils.sheet_to_json(workSheet);
    }
}
module.exports=new ExcelReader();