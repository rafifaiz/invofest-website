import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  register: ReturnType<typeof useForm>[ 'register' ];
  error?: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
};

const Input: React.FC<FormComponentProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder
}) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700 text-sm">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-700 transition-all ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
    />
    {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
  </div>
);

const Select: React.FC<FormComponentProps & { children: React.ReactNode }> = ({
  label,
  name,
  register,
  error,
  children
}) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700 text-sm">{label}</label>
    <select
      {...register(name)}
      className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-700 transition-all ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
    >
      {children}
    </select>
    {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
  </div>
);

const Textarea: React.FC<FormComponentProps> = ({
  label,
  name,
  register,
  error,
  placeholder
}) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700 text-sm">{label}</label>
    <textarea
      placeholder={placeholder}
      rows={4}
      {...register(name)}
      className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-700 transition-all resize-vertical ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
    />
    {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
  </div>
);

type ButtonProps = {
  label: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false,
  onClick
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700"
  };
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 w-full ${variants[variant as keyof typeof variants]} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoading ? "⏳ Menyimpan..." : label}
    </button>
  );
};

export default function CategoryCreate() {
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
    setError("");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Kategori baru:", data);
    alert("✅ Kategori berhasil ditambahkan!");
    reset();
    setIsLoading(false);
  };

  return (
    <div className="p-8 max-w-2xl">
      <div className="text-center mb-8">
        <div className="inline-block w-20 h-2 bg-red-600 rounded-full mb-4 mx-auto"></div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tambah Kategori Event</h1>
        <p className="text-gray-600">Form lengkap untuk kategori baru</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Nama Kategori"
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="e.g. Seminar"
          />

          <Textarea
            label="Deskripsi"
            name="description"
            register={register}
            error={errors.description?.message}
            placeholder="Deskripsi kategori (wajib)"
          />

          <Select
            label="Warna Badge"
            name="color"
            register={register}
            error={errors.color?.message}
          >
            <option value="">Pilih warna</option>
            <option value="red">🔴 Merah</option>
            <option value="blue">🔵 Biru</option>
            <option value="green">🟢 Hijau</option>
            <option value="yellow">🟡 Kuning</option>
            <option value="purple">🟣 Ungu</option>
          </Select>

          {error && (
            <div className="bg-red-50 border-l-2 border-red-200 text-red-600 px-4 py-3 rounded-lg">
              ❌ {error}
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button type="submit" label="Simpan Kategori" variant="primary" isLoading={isLoading} />
            <Button type="button" label="Reset Form" variant="outline" onClick={() => reset()} />
          </div>
        </form>
      </div>
    </div>
  );
}

