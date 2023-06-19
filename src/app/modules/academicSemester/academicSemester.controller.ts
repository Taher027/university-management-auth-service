import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemister.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academiSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academiSemesterData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'semeser created successfully',
      data: result,
    });
    next();
  }
);
export const AcademicSemesterController = {
  createSemester,
};
