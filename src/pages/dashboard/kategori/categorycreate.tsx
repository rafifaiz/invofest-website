import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

interface CategoryFormData {
  name: string;
  description: string;
  color: string;
}

const categorySchema = z.object({
  name: z.string().min(1, "Nama kategori wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
  color: z.string().min(1, "Warna wajib dipilih")
});

type FormComponentProps = {
  label: string;
  name: keyof CategoryFormData;
  register: ReturnType<typeof useForm>['register'];
  error?: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
};

// Sub-Komponen Input Cyber
const Input: React.FC<FormComponentProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-gray-400 text-xs font-mono tracking-wider">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`border rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all font-mono text-sm ${
        error ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1 font-mono">! {error}</p>}
  </div>
);

// Sub-Komponen Select Cyber
const Select: React.FC<FormComponentProps & { children: React.ReactNode }> = ({
  label,
  name,
  register,
  error,
  children
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-gray-400 text-xs font-mono tracking-wider">{label}</label>
    <select
      {...register(name)}
      className={`border rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all font-mono text-sm ${
        error ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
      }`}
    >
      {children}
    </select>
    {error && <p className="text-red-500 text-xs mt-1 font-mono">! {error}</p>}
  </div>
);

// Sub-Komponen Textarea Cyber
const Textarea: React.FC<FormComponentProps> = ({
  label,
  name,
  register,
  error,
  placeholder
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-gray-400 text-xs font-mono tracking-wider">{label}</label>
    <textarea
      placeholder={placeholder}
      rows={4}
      {...register(name)}
      className={`border rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all resize-none font-mono text-sm ${
        error ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1 font-mono">! {error}</p>}
  </div>
);

type ButtonProps = {
  label: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
  onClick?: () => void;
};

// Sub-Komponen Button Cyber
const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false,
  onClick
}) => {
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.99]",
    outline: "border border-zinc-800 text-gray-400 hover:bg-zinc-900 hover:text-gray-200"
  };
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={`flex-1 py-3 rounded-lg font-bold font-mono text-xs uppercase tracking-wider transition-all duration-200 ${variants[variant]} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoading ? "⏳ INJECTING..." : label}
    </button>
  );
};

export default function CategoryCreate() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema)
  });

  const onSubmit = async (data: CategoryFormData) => {
    setIsLoading(true);
    try {
      // backend hanya butuh `nama`
      await api.post('/categories', { nama: data.name });
      alert(" Kategori berhasil di-deploy ke sistem.");
      navigate("/dashboard/kategori"); // Redirect setelah sukses
    } catch (error) {
      console.error(error);
      setError("Gagal menyimpan kategori ke database.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 max-w-2xl mx-auto text-gray-300">
      
      {/* Header - Cyber Emerald */}
      <div className="text-center mb-10">
        <div className="inline-block w-20 h-1 bg-emerald-500 rounded-full mb-4 mx-auto shadow-md shadow-emerald-500/50"></div>
        <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-widest font-mono">
          NEW_CATEGORY_NODE //
        </h1>
        <p className="text-gray-500 mt-1 font-mono text-xs tracking-wide">
          Konfigurasi klasifikasi taktis untuk Equator APT
        </p>
      </div>

      {/* Main Container Form */}
      <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-900 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          <Input
            label="// CATEGORY_NAME"
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Contoh: Digital Forensics, Threat Hunting"
          />

          <Textarea
            label="// CLASSIFICATION_DESCRIPTION"
            name="description"
            register={register}
            error={errors.description?.message}
            placeholder="Masukkan deskripsi cakupan log kategori..."
          />

          <Select
            label="// BADGE_COLOR_HEX"
            name="color"
            register={register}
            error={errors.color?.message}
          >
            <option value="" className="bg-zinc-900 text-gray-500">Pilih skema warna</option>
            <option value="emerald" className="bg-zinc-900">🟢 Emerald Green (Safe/Active)</option>
            <option value="cyan" className="bg-zinc-900">🔵 Cyan Tech (Info/Internal)</option>
            <option value="amber" className="bg-zinc-900">🟡 Amber Yellow (Warning/Restricted)</option>
            <option value="crimson" className="bg-zinc-900">🔴 Crimson Red (Critical Breach)</option>
          </Select>

          {/* System Error Notification Box */}
          {error && (
            <div className="bg-red-950/20 border border-red-900/50 text-red-400 px-4 py-2.5 rounded-lg text-xs font-mono">
              [!] {error}
            </div>
          )}

          {/* Tombol Eksekusi */}
          <div className="flex gap-4 pt-4">
            <Button type="submit" label="Inject Category" variant="primary" isLoading={isLoading} />
            <Button type="button" label="Clear System" variant="outline" onClick={() => reset()} />
          </div>
          
        </form>
      </div>
    </div>
  );
}