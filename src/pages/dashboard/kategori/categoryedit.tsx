import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Terminal, Save, ArrowLeft } from "lucide-react";
import api from "../../../services/api";

const categoryEditSchema = z.object({
  name: z.string().min(1, "Nama kategori wajib diisi"),
});

type CategoryEditFormData = z.infer<typeof categoryEditSchema>;

export default function CategoryEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CategoryEditFormData>({
    resolver: zodResolver(categoryEditSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    const fetchCategory = async () => {
      if (!id) return;
      try {
        const response = await api.get(`/categories/${id}`);
        const c = response.data;
        setValue("name", c.nama ?? c.name ?? "");
      } catch (error) {
        console.error("Gagal menarik data kategori:", error);
      }
    };

    fetchCategory();
  }, [id, setValue]);

  const onSubmit = async (data: CategoryEditFormData) => {
    if (!id) return;
    setIsLoading(true);
    try {
      // backend Prisma cuma menyimpan `nama`
      await api.put(`/categories/${id}`, { nama: data.name });
      alert("Data kategori berhasil di-commit.");
      navigate("/dashboard/kategori");
    } catch (error) {
      console.error(error);
      alert("Gagal mengupdate data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 bg-black text-gray-300 min-h-screen font-mono">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-wider">
            MODIFY_CATEGORY_NODE // 0{id}
          </h1>
          <p className="text-xs text-emerald-500/80 mt-2 tracking-wide">
            // Konfigurasi ulang parameter parameter cluster event
          </p>
        </div>
        <Link
          to="/dashboard/kategori"
          className="flex items-center justify-center gap-1.5 border border-zinc-800 bg-zinc-950 text-xs text-gray-400 hover:text-gray-200 px-4 py-2.5 rounded-xl hover:bg-zinc-900 transition-all w-full sm:w-auto"
        >
          <ArrowLeft size={14} />
          BACK_TO_CLUSTER
        </Link>
      </div>

      {/* Configuration Card Form */}
      <div className="bg-zinc-950 rounded-2xl border border-zinc-900 shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-zinc-900 bg-zinc-950 flex items-center gap-2">
          <Terminal size={14} className="text-emerald-400" />
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-200">
            CATEGORY_PARAMETER_PANEL //
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-zinc-400 text-xs tracking-wider">// CATEGORY_NAME</label>
            <input
              type="text"
              {...register("name")}
              placeholder="cth: Digital Forensics"
              className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-2 transition-all ${
                errors.name ? "border-red-600 focus:ring-red-600" : "border-zinc-800 focus:border-emerald-500"
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs">! {errors.name.message}</p>}
          </div>

          <div className="pt-4 border-t border-zinc-900 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md transition-all active:scale-[0.98]"
            >
              <Save size={14} />
              {isLoading ? "UPDATING_NODE..." : "Save_Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

