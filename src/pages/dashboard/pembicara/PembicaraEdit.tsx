import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from "../../../services/api"; // Naik 3 level ke src/services/api

const speakerSchema = z.object({
    name: z.string().min(1, "Wajib diisi"),
    role: z.string().min(1, "Wajib diisi"),
    social: z.string().min(1, "Wajib diawali @").startsWith("@"),
    events: z.number().min(0)
});

type SpeakerFormData = z.infer<typeof speakerSchema>;

export default function PembicaraEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<SpeakerFormData>({ resolver: zodResolver(speakerSchema) });

    useEffect(() => {
        api.get(`/speakers/${id}`).then(res => {
            Object.keys(res.data).forEach((key: any) => setValue(key, res.data[key]));
        });
    }, [id, setValue]);

    const onSubmit = async (data: SpeakerFormData) => {
        await api.put(`/speakers/${id}`, data);
        navigate('/dashboard/pembicara');
    };

    return (
        <div className="p-8 max-w-4xl mx-auto bg-black text-gray-300 min-h-screen">
            <h1 className="text-3xl font-black text-emerald-500 uppercase">MODIFY_ENTITY // {id}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
                <input {...register("name")} className="w-full bg-zinc-900 p-3 rounded" />
                <button type="submit" className="bg-emerald-600 px-6 py-2 rounded">Commit_Update</button>
            </form>
        </div>
    );
}