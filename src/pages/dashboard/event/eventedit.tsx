import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Save } from "lucide-react";
import api from "../../../services/api";

const eventEditSchema = z.object({
  nama: z.string().min(1, "Judul event wajib diisi"),
  lokasi: z.string().min(1, "Lokasi wajib diisi"),
  date_event: z.string().min(1, "Tanggal wajib dipilih"),
  category_id: z.number().int().min(1, "Kategori wajib dipilih"),
  pembicara_id: z.number().int().min(1, "Pembicara wajib dipilih"),
  description: z.string().optional(),
});

type EventEditFormData = z.infer<typeof eventEditSchema>;

type Category = { id: number; nama: string };

type Speaker = {
  id: number;
  nama?: string;
  name?: string;
  jabatan?: string;
  role?: string;
  sosialMedia?: string | null;
  social?: string | null;
};

type EventResponse = {
  id: number;
  nama: string;
  lokasi: string;
  date_event: string;
  categoryId: number;
  pembicaraId: number;
  description?: string | null;
};

export default function EventEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  const schemaResolver = useMemo(() => zodResolver(eventEditSchema), []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EventEditFormData>({
    resolver: schemaResolver,
    defaultValues: {
      nama: "",
      lokasi: "",
      date_event: "",
      category_id: 0,
      pembicara_id: 0,
      description: "",
    },
  });

  useEffect(() => {
    const run = async () => {
      try {
        const [catRes, spRes] = await Promise.all([api.get("/categories"), api.get("/speakers")]);
        setCategories(catRes.data);
        setSpeakers(spRes.data);
      } catch (e) {
        console.error("Gagal memuat dropdown event", e);
      }

      if (!id) return;

      try {
        const res = await api.get(`/events/${id}`);
        const e = res.data as EventResponse;
        setValue("nama", e.nama);
        setValue("lokasi", e.lokasi);
        setValue("date_event", e.date_event);
        setValue("category_id", e.categoryId);
        setValue("pembicara_id", e.pembicaraId);
        setValue("description", e.description ?? "");
      } catch (e) {
        console.error("Gagal menarik data event", e);
      }
    };

    run();
  }, [id, setValue]);

  const onSubmit = async (data: EventEditFormData) => {
    if (!id) return;
    setIsLoading(true);

    try {
      await api.put(`/events/${id}`, {
        nama: data.nama,
        lokasi: data.lokasi,
        date_event: data.date_event,
        categoryId: data.category_id,
        pembicaraId: data.pembicara_id,
        description: data.description || "",
      });

      alert("Data event berhasil di-update.");
      navigate("/dashboard/event");
    } catch (e) {
      console.error(e);
      alert("Gagal meng-update data event.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 bg-black text-gray-300 min-h-screen font-mono">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-wider">
            MODIFY_EVENT_NODE // 0{id}
          </h1>
          <p className="text-xs text-emerald-500/80 mt-2 tracking-wide">// Konfigurasi ulang parameter event cluster</p>
        </div>
        <Link
          to="/dashboard/event"
          className="flex items-center justify-center gap-1.5 border border-zinc-800 bg-zinc-950 text-xs text-gray-400 hover:text-gray-200 px-4 py-2.5 rounded-xl hover:bg-zinc-900 transition-all w-full sm:w-auto"
        >
          <ArrowLeft size={14} /> BACK_TO_REGISTRY
        </Link>
      </div>

      <div className="bg-zinc-950 rounded-2xl border border-zinc-900 shadow-2xl overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400 text-xs tracking-wider">// EVENT_TITLE</label>
              <input
                {...register("nama")}
                className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-2 transition-all ${
                  errors.nama
                    ? "border-red-600 focus:ring-red-600"
                    : "border-zinc-800 focus:ring-emerald-500"
                }`}
              />
              {errors.nama && <p className="text-red-500 text-xs">! {errors.nama.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400 text-xs tracking-wider">// OPERATIONAL_DATE</label>
              <input
                type="date"
                {...register("date_event")}
                className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-2 transition-all ${
                  errors.date_event
                    ? "border-red-600 focus:ring-red-600"
                    : "border-zinc-800 focus:ring-emerald-500"
                }`}
              />
              {errors.date_event && <p className="text-red-500 text-xs">! {errors.date_event.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400 text-xs tracking-wider">// CATEGORY</label>
              <select
                {...register("category_id")}
                className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-2 transition-all ${
                  errors.category_id
                    ? "border-red-600 focus:ring-red-600"
                    : "border-zinc-800 focus:ring-emerald-500"
                }`}
              >
                <option value={0}>Pilih kategori</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nama}
                  </option>
                ))}
              </select>
              {errors.category_id && <p className="text-red-500 text-xs">! {errors.category_id.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400 text-xs tracking-wider">// PEMBICARA</label>
              <select
                {...register("pembicara_id")}
                className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-2 transition-all ${
                  errors.pembicara_id
                    ? "border-red-600 focus:ring-red-600"
                    : "border-zinc-800 focus:ring-emerald-500"
                }`}
              >
                <option value={0}>Pilih pembicara</option>
                {speakers.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nama ?? s.name ?? `Speaker #${s.id}`}
                  </option>
                ))}
              </select>
              {errors.pembicara_id && <p className="text-red-500 text-xs">! {errors.pembicara_id.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400 text-xs tracking-wider">// LOCATION</label>
              <input
                {...register("lokasi")}
                className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-lg text-sm text-gray-100 focus:outline-none focus:ring-2 transition-all ${
                  errors.lokasi
                    ? "border-red-600 focus:ring-red-600"
                    : "border-zinc-800 focus:ring-emerald-500"
                }`}
              />
              {errors.lokasi && <p className="text-red-500 text-xs">! {errors.lokasi.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400 text-xs tracking-wider">// DESCRIPTION</label>
              <input {...register("description")} className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-100" />
            </div>
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

