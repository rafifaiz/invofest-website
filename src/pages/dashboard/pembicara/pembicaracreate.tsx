import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface PembicaraFormData {
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
  twitter?: string;
  instagram?: string;
}

const pembicaraSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  role: z.string().min(1, "Peran wajib diisi"),
  bio: z.string().optional(),
  photoUrl: z.string().url("URL foto tidak valid").optional().or(z.literal("")),
  twitter: z.string().optional(),
  instagram: z.string().optional()
});

type InputProps = {
  label: string;
  name: keyof PembicaraFormData;
  register: any;
  error?: string;
  type?: string;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all ${
        error ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
      }`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);

const Textarea: React.FC<InputProps> = ({
  label,
  name,
  register,
  error,
  placeholder
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      rows={4}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-vertical ${
        error ? 'border-red-500 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-gray-300'
      }`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
);

export default function PembicaraCreate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(pembicaraSchema)
  });

  const onFormSubmit = (data: PembicaraFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    setTimeout(() => {
      console.log("Pembicara data:", data);
      alert("✅ Pembicara berhasil disimpan!");
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent mb-4">
          Tambah Pembicara Baru
        </h1>
        <p className="text-xl text-gray-600">Kelola pembicara Invofest dengan mudah</p>
      </div>

      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/50">
        <form onSubmit={handleSubmit(onFormSubmit as any)} className="space-y-6">
          
          <Input
            label="Nama Lengkap *"
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Dr. John Doe"
          />

          <Input
            label="Peran/Jabatan *"
            name="role"
            register={register}
            error={errors.role?.message}
            placeholder="CEO Tech Startup"
          />

          <Textarea
            label="Biografi"
            name="bio"
            register={register}
            error={errors.bio?.message}
            placeholder="Biografi lengkap pembicara..."
          />

          <Input
            label="URL Foto"
            name="photoUrl"
            register={register}
            error={errors.photoUrl?.message}
            type="url"
            placeholder="https://example.com/foto.jpg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Twitter"
              name="twitter"
              register={register}
              error={errors.twitter?.message}
              placeholder="@username"
            />
            <Input
              label="Instagram"
              name="instagram"
              register={register}
              error={errors.instagram?.message}
              placeholder="@username"
            />
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
                'Simpan Pembicara'
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

