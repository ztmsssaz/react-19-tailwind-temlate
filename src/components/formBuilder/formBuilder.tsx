import { useForm } from 'react-hook-form'
import { Field } from '../../dataTypes' // تایپ‌هایی که بالا تعریف کردیم
import { useEffect, useState } from 'react'
import FormPreview from './FormPreview'

const formFields: Field[] = [
   { type: 'text', label: 'Full Name', name: 'fullName', required: true },
   { type: 'textarea', label: 'textarea', name: 'textarea' },
   { type: 'checkbox', label: 'checkbox', name: 'checkbox', required: true },
   {
      type: 'radio',
      label: 'radio',
      name: 'radio',
      required: true,
      options: [{ label: 'radio', value: 'radio' }],
   },
   {
      type: 'select',
      label: 'select',
      name: 'select',
      options: [{ label: 'select', value: 'select' }],
   },
   { type: 'date', label: 'date', name: 'date' },
   { type: 'file', label: 'file', name: 'file' },
]

type FormData = {
   [key: string]: any
}

export default function FormBuilder() {
   const [formData, setFormData] = useState<Field[]>([])
   const {
      register,
      formState: { errors },
   } = useForm<FormData>()

   const addToForm = (input: Field) => {
      setFormData((oldState) => {
         const newData = [...oldState]
         newData.push(input)
         return newData
      })
   }

   useEffect(() => {
      console.log(formData)
   }, [formData])

   const updateField = (index: number, updated: Partial<Field>) => {
      setFormData((prev) => {
         const newFields = [...prev]
         newFields[index] = { ...newFields[index], ...updated }
         return newFields
      })
   }

   const deleteField = (index: number) => {
      setFormData((prev) => prev.filter((_, i) => i !== index))
   }

   return (
      <div id="Form" className="flex w-full flex-row">
         <div className="mx-auto w-1/2 max-w-xl space-y-4 rounded-xl bg-gray-200 p-6 shadow-md">
            <h2 className="text-lg font-semibold"> فرم کامل</h2>

            {formFields.map((field) => {
               const commonProps = {
                  ...register(field.name, { required: field.required }),
                  className: 'w-full p-2 border rounded',
               }

               return (
                  <div className="flex" key={field.id}>
                     <label className="mb-1 block font-medium">
                        {field.label}
                     </label>

                     {field.type === 'text' && (
                        <input type="text" {...commonProps} />
                     )}
                     {field.type === 'textarea' && (
                        <textarea {...commonProps} />
                     )}
                     {field.type === 'checkbox' && (
                        <input
                           type="checkbox"
                           {...commonProps}
                           className="h-20 w-20"
                        />
                     )}
                     {field.type === 'radio' && field.options && (
                        <div className="flex">
                           {field.options.map((opt) => (
                              <label
                                 key={opt.value}
                                 className="flex items-center"
                              >
                                 <input
                                    type="radio"
                                    className="w-20"
                                    value={opt.value}
                                    {...register(field.name, {
                                       required: field.required,
                                    })}
                                 />
                                 {opt.label}
                              </label>
                           ))}
                        </div>
                     )}
                     {field.type === 'select' && field.options && (
                        <select {...commonProps}>
                           <option value="">Select...</option>
                           {field.options.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                 {opt.label}
                              </option>
                           ))}
                        </select>
                     )}
                     {field.type === 'date' && (
                        <input type="date" {...commonProps} />
                     )}
                     {field.type === 'file' && (
                        <input type="file" {...commonProps} />
                     )}

                     {errors[field.name] && (
                        <p className="text-sm text-red-500">
                           This field is required
                        </p>
                     )}
                     <span
                        className="m-5 cursor-copy text-xs hover:font-bold"
                        onClick={() => addToForm(field)}
                     >
                        Choose
                     </span>
                  </div>
               )
            })}

            <button
               type="submit"
               className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
               Submit
            </button>
         </div>

         <div className="w-1/2">
            <FormPreview
               formData={formData}
               onChange={updateField}
               onDelete={deleteField}
            />
         </div>
      </div>
   )
}
