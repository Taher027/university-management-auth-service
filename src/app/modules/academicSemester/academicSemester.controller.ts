import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemister.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academiSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academiSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const AcademicSemesterController = {
  createSemester,
};
