import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';
const academicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.number({ required_error: 'Year is required' }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'start month required',
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'endMonth is required',
    }),
  }),
});

export const academicSemesterValidation = {
  academicSemesterZodSchema,
};
