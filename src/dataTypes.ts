// Field.ts
export type FieldType = "text" | "textarea" | "checkbox" | "radio" | "select" | "date" | "file";

export type FieldOption = {
  label: string;
  value: string;
};

export type Field = {
  id?: string;
  type: FieldType;
  label: string;
  name: string;
  required?: boolean;
  options?: FieldOption[]; // برای select و radio
};
