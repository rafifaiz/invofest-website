import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  date: z.string().min(1, "Tanggal wajib dipilih"),
  categoryId: z.string().min(1, "Kategori wajib dipilih"),
  location: z.string().min(1, "Lokasi wajib diisi"),
  description: z.string().optional(),
  maxParticipants: z.number().min(1, "Min 1 peserta")
}).refine((data) => !isNaN(Number(data.maxParticipants)), {
  message: "Kuota harus angka yang valid",
  path: ["maxParticipants"]
});

type FormData = z.infer<typeof schema>;

export default function EventCreate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onFormSubmit = (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    setTimeout(() => {
      console.log("Event data:", data);
      alert("✅ Event berhasil disimpan!");
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent mb-4">
          Tambah Event Baru
        </h1>
        <p className="text-xl text-gray-600">Kelola event Invofest dengan mudah</p>
      </div>

      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/50">
        <form onSubmit={handleSubmit(onFormSubmit as any)} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Event *
            </label>
            <input
              {...register("title")}
              placeholder="Seminar AI 2024"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                errors.title ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Pelaksanaan *
            </label>
            <input
              type="date"
              {...register("date")}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                errors.date ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date?.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori *
            </label>
            <select
              {...register("categoryId")}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                errors.categoryId ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <option value="">Pilih kategori</option>
              <option value="seminar">Seminar</option>
              <option value="workshop">Workshop</option>
              <option value="talkshow">Talkshow</option>
              <option value="competition">Competition</option>
            </select>
            {errors.categoryId && (
              <p className="mt-1 text-sm text-red-600">{errors.categoryId?.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lokasi *
            </label>
            <input
              {...register("location")}
              placeholder="Aula Gedung Serbaguna"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                errors.location ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location?.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kuota Peserta *
            </label>
            <input
              type="number"
              {...register("maxParticipants")}
              placeholder="100"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
                errors.maxParticipants ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.maxParticipants && (
              <p className="mt-1 text-sm text-red-600">{errors.maxParticipants?.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi
            </label>
            <textarea
              {...register("description")}
              rows={4}
              placeholder="Detail tentang event..."
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-vertical ${
                errors.description ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
            )}
          </div>

          {submitError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-red-800 font-medium">{submitError}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 py-4 px-8 font-semibold rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-3 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white hover:shadow-xl hover:-translate-y-1 active:translate-y-0'
              }`}
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                'Simpan Event'
              )}
            </button>
            <button
              type="button"
              onClick={() => reset()}
              disabled={isSubmitting}
              className="flex-1 py-4 px-8 font-semibold border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 text-gray-700 transition-all duration-200"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

