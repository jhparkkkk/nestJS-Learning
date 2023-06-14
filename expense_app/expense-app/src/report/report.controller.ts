// import a decorator
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseUUIDPipe,
    ParseEnumPipe
  } from "@nestjs/common"
  
  import { report } from "process"
  import { ReportType, data } from 'src/data'
  import { v4 as uuid } from 'uuid'
  import { ReportService } from "./report.service"
  import { CreateReportDto, ReportResponseDto, UpdateReportDto } from "src/dtos/report.dto"
  
  @Controller('report/:type')
  export class ReportController {
    constructor(private readonly ReportService: ReportService) {}
    @Get()
    getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto[] {
      const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE  
      return this.ReportService.getAllReports(reportType)
    }
    @Get(':id')
    getReportById(
      @Param('type', new ParseEnumPipe(ReportType)) type: string,
      @Param('id', ParseUUIDPipe) id: string
    ): ReportResponseDto {
      console.log(id, typeof id)
      const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
      return this.ReportService.getReportById(reportType, id);
    }
    @Post()
    createReport(@Body() {amount, source}: CreateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto {
      const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
      return this.ReportService.createReport(reportType, {amount, source});
    }
  
    @Put(':id')
    updateReport(@Body() body: UpdateReportDto, @Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id') id: string) : ReportResponseDto{
      console.log(body)
      const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
      return this.ReportService.updateReport(reportType, id, body);
    }
  
    @Delete(':id')
    deleteReport(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id') id: string){
      const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
      return this.ReportService.deleteReport(id);
    }
      
  }
  
  // http::localhost:3000/report/expense/7
  // + controller decorator + method decorator
  
  