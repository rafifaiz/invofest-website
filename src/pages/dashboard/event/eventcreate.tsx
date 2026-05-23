import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "../../../services/api";

const eventCreateSchema = z.object({
  nama: z.string().min(1, "Judul event wajib diisi"),
  lokasi: z.string().min(1, "Lokasi wajib diisi"),
  date_event: z.string().min(1, "Tanggal wajib dipilih"),
  category_id: z.coerce.number().int().min(1, "Kategori wajib dipilih"),
  pembicara_id: z.coerce.number().int().min(1, "Pembicara wajib dipilih"),
  description: z.string().optional(),
});

type EventCreateFormData = z.infer<typeof eventCreateSchema>;

type Category = { id: number; nama: string };
// backend speaker model: Pembicara { id, nama, jabatan, sosialMedia }
// tapi di frontend beberapa file menamai `name`/`role`. Untuk aman, pakai union.
type Speaker = {
  id: number;
  nama?: string;
  name?: string;
  jabatan?: string;
  role?: string;
};

export default function EventCreate() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventCreateFormData>({
    resolver: zodResolver(eventCreateSchema) as any,
    defaultValues: {
      nama: "",
      lokasi: "",
      date_event: "",
      category_id: 0,
      pembicara_id: 0,
      description: "",
    } as any,
  });

  useEffect(() => {
    const run = async () => {
      try {
        const [catRes, spRes] = await Promise.all([
          api.get("/categories"),
          api.get("/pembicara"),
        ]);
        setCategories(catRes.data);
        setSpeakers(spRes.data);

      } catch (e) {
        console.error("Gagal memuat dropdown event", e);
      }
    };
    run();
  }, []);

  const onSubmit = async (data: EventCreateFormData) => {
    setIsSubmitting(true);
    try {
      // backend expects: { nama, tanggal, lokasi, description?, categoryId, pembicaraId }
      await api.post("/events", {
        nama: data.nama,
        tanggal: data.date_event,
        lokasi: data.lokasi,
        description: data.description,
        categoryId: data.category_id,
        pembicaraId: data.pembicara_id,
      });

      alert(" Event berhasil di-deploy ke sistem.");
      navigate("/dashboard/event");
    } catch (error) {
      console.error(error);
      alert(" Gagal menyimpan data ke database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 max-w-2xl mx-auto text-gray-300">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-emerald-500 uppercase tracking-widest font-mono">
          DEPLOY_NEW_EVENT
        </h1>
      </div>

      <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-900 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-mono">// EVENT_TITLE</label>
            <input
              {...register("nama")}
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-100"
            />
            {errors.nama && (
              <p className="text-red-500 text-xs">! {errors.nama.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-mono">// OPERATIONAL_DATE</label>
            <input
              type="date"
              {...register("date_event")}
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-100"
            />
            {errors.date_event && (
              <p className="text-red-500 text-xs">! {errors.date_event.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-mono">// CATEGORY</label>
            <select
              {...register("category_id")}
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-100"
            >
              <option value={0}>Pilih kategori</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nama}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p className="text-red-500 text-xs">! {errors.category_id.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-mono">// PEMBICARA</label>
            <select
              {...register("pembicara_id")}
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-100"
            >
              <option value={0}>Pilih pembicara</option>
              {speakers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nama ?? s.name ?? `Speaker #${s.id}`}
                </option>
              ))}
            </select>
            {errors.pembicara_id && (
              <p className="text-red-500 text-xs">! {errors.pembicara_id.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-mono">// LOCATION</label>
            <input
              {...register("lokasi")}
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-100"
            />
            {errors.lokasi && (
              <p className="text-red-500 text-xs">! {errors.lokasi.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-mono">// DESCRIPTION</label>
            <input
              {...register("description")}
              className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-100"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all"
          >
            {isSubmitting ? "INJECTING..." : "Inject Event"}
          </button>
        </form>
      </div>
    </div>
  );
}

