import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const pembicaraSchema = z.object({
  nama: z.string().min(1, "Nama pembicara wajib diisi"),
  jabatan: z.string().min(1, "Jabatan wajib diisi"),
  sosialMedia: z.string().optional(),
});

type PembicaraFormData = z.infer<typeof pembicaraSchema>;

type InputProps = {
  label: string;
  name: keyof PembicaraFormData;
  register: ReturnType<typeof useForm<PembicaraFormData>>["register"];
  error?: string;
  type?: string;
  placeholder?: string;
};

const Input = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
}: InputProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-gray-400 text-xs font-mono tracking-wider">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all font-mono text-sm ${
        error ? "border-red-600 focus:ring-red-600" : "border-zinc-800"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1 font-mono">! {error}</p>}
  </div>
);

export default function PembicaraCreate() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PembicaraFormData>({ resolver: zodResolver(pembicaraSchema) });

  const onFormSubmit = async (data: PembicaraFormData) => {
    setIsSubmitting(true);
    try {
      const payload = {
        nama: data.nama,
        jabatan: data.jabatan,
        sosialMedia: data.sosialMedia,
      };

      await api.post("/pembicara", payload);
      alert(" Data Pembicara Berhasil Diintegrasikan!");
      navigate("/dashboard/pembicara");
    } catch (e) {
      console.error(e);
      alert("Gagal menginjeksi data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 max-w-2xl mx-auto text-gray-300">
      <h1 className="text-3xl font-black text-emerald-500 uppercase tracking-widest font-mono text-center mb-10">
        REGISTER_SPEAKER //
      </h1>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="bg-zinc-950 rounded-2xl p-8 border border-zinc-900 space-y-5"
      >
        <Input
          label="// FULL_NAME *"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />
        <Input
          label="// ROLE_OR_SPECIALIZATION *"
          name="jabatan"
          register={register}
          error={errors.jabatan?.message}
        />
        <Input
          label="// SOCIAL_MEDIA (username)"
          name="sosialMedia"
          register={register}
          placeholder="contoh: @equatorapt"
          error={errors.sosialMedia?.message}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 py-3 rounded-lg font-bold uppercase"
        >
          {isSubmitting ? "INJECTING..." : "Inject Speaker"}
        </button>
      </form>
    </div>
  );
}

