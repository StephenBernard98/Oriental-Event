import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z
    .string()
    .min(10, {
      message: "description must be at least 10 characters.",
    })
    .max(400, {
      message: "description must be less than 400 characters.",
    }),
  location: z
    .string()
    .min(5, {
      message: "location must be at least 5 characters.",
    })
    .max(400, {
      message: "location must be less than 400 characters.",
    }),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
