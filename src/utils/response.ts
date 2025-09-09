import { Response } from "express";

export const okResponse = (res: Response, data: unknown) => {
  return res.status(200).json({ success: true, data });
};

export const createdResponse = (res: Response, data: unknown) => {
  return res.status(201).json({ success: true, data });
};

export const errorResponse = (res: Response, statusCode: number, message: string) => {
  return res.status(statusCode).json({ success: false, message });
};
