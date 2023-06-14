import { ReportType, data } from "src/data";
import { Injectable } from "@nestjs/common";
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from "src/dtos/report.dto";

interface Report {
  amount: number;
  source: string;
}

// '?' means types are optional
interface UpdateReport {
  amount?: number;
  source?: string;
}

interface UpdateReport {}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report.filter((report) => report.type ===  type).map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto { 
    const report = data.report.filter((report) => report.type === type).find((report) => report.id === id);
    if (!report) return;
    return new ReportResponseDto(report);
  }

  createReport(type: ReportType, {amount, source}: Report): ReportResponseDto{
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    }
    data.report.push(newReport)
    return new ReportResponseDto(newReport);
  }
  
  updateReport(type: ReportType, id: string, {amount, source}: UpdateReport): ReportResponseDto{
    const reportToUpdate = data.report.filter((report) => report.type === type).find((report) => report.id === id);
    if (!reportToUpdate)
      return;
    if (amount)
      reportToUpdate.amount = amount
    if (source)
      reportToUpdate.source =  source
    reportToUpdate.updated_at = new Date()
    return new ReportResponseDto(reportToUpdate);

  }

  deleteReport(id: string){
    const index = data.report.findIndex(report => report.id === id);
    if (index !== -1) {
      data.report.splice(index, 1); }
    }
}