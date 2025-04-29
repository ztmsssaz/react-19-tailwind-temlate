import { Field } from '../../dataTypes'

type Props = {
   formData: Field[]
   onChange: (index: number, updatedField: Partial<Field>) => void
   onDelete: (index: number) => void
}

export default function FormPreview({ formData, onChange, onDelete }: Props) {
   return (
      <div className="space-y-4 rounded-xl bg-white p-6 shadow-md">
         <h2 className="text-lg font-semibold">🧪 فرم در حال ساخت</h2>

         {formData.length === 0 && (
            <p className="text-gray-500">هیچ فیلدی اضافه نشده است.</p>
         )}

         {formData.map((field, index) => (
            <div
               key={index}
               className="relative space-y-2 rounded-md border bg-gray-50 p-4"
            >
               <div className="flex items-center gap-4">
                  <label className="w-24 font-medium">Label:</label>
                  <input
                     type="text"
                     className="w-full rounded border p-1"
                     value={field.label}
                     onChange={(e) =>
                        onChange(index, { label: e.target.value })
                     }
                  />
               </div>

               <div className="flex items-center gap-4">
                  <label className="w-24 font-medium">Name:</label>
                  <input
                     type="text"
                     className="w-full rounded border p-1"
                     value={field.name}
                     onChange={(e) => onChange(index, { name: e.target.value })}
                  />
               </div>

               <div className="flex items-center gap-2">
                  <input
                     type="checkbox"
                     checked={field.required || false}
                     onChange={(e) =>
                        onChange(index, { required: e.target.checked })
                     }
                  />
                  <label>Required</label>
               </div>

               <button
                  onClick={() => onDelete(index)}
                  className="absolute right-2 top-2 text-sm text-red-500 hover:text-red-700"
               >
                  حذف
               </button>
            </div>
         ))}
      </div>
   )
}
