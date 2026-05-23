import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

interface LoginFormData {
    nim: string;
    password: string;
}

// Skema validasi murni NIM angka
const loginSchema = z.object({
    nim: z.string().min(1, "NIM wajib diisi").regex(/^\d+$/, "NIM harus berupa angka murni"),
    password: z.string().min(1, "Password wajib diisi")
});

export const Login = () => {
    const navigate = useNavigate();
    const loginGlobal = useAuthStore((state) => state.login);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setLoginError("");
        
        // Efek loading autentikasi server simulasi
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (data.nim === "24090033" && data.password === "admin123") {
            loginGlobal(data.nim); // Simpan NIM ke Zustand global store
            alert(`✅ Access Granted! Selamat datang di Dashboard.`);
            navigate("/dashboard");
            reset();
        } else {
            setLoginError("AUTH_FAILURE: NIM atau password salah!");
        }
        
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black py-10 px-4 text-gray-300">
            <div className="w-full max-w-md">
                
                {/* Header Title Cyber Theme */}
                <div className="text-center mb-8">
                    <div className="inline-block w-20 h-1 bg-emerald-500 rounded-full mb-3 shadow-md shadow-emerald-500/50"></div>
                    <h1 className="text-3xl font-black text-emerald-400 uppercase tracking-widest font-mono">
                        EQUATOR_APT //
                    </h1>
                    <p className="text-gray-500 mt-1 font-mono text-xs tracking-wider">
                        UTS_MODE: SYSTEM_BREACH_AUTH
                    </p>
                </div>

                {/* Box Container Form Login */}
                <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-900 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        
                        {/* Input NIM */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-xs font-mono tracking-wider">
                                // IDENTITY_NIM
                            </label>
                            <input
                                type="text"
                                placeholder="Input NIM Anda"
                                {...register("nim")}
                                className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all font-mono text-sm ${
                                    errors.nim ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
                                }`}
                            />
                            {errors.nim && (
                                <p className="text-red-500 text-xs mt-1 font-mono">! {errors.nim.message}</p>
                            )}
                        </div>

                        {/* Input Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-xs font-mono tracking-wider">
                                // ACCESS_PASSWORD
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    {...register("password")}
                                    className={`border rounded-lg px-4 py-2 w-full pr-24 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all font-mono text-sm ${
                                        errors.password ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-400 font-mono hover:text-emerald-300 font-bold"
                                >
                                    {showPassword ? "HIDE" : "VIEW"}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1 font-mono">! {errors.password.message}</p>
                            )}
                        </div>

                        {/* Error Alert Box */}
                        {loginError && (
                            <div className="bg-red-950/20 border border-red-900/50 text-red-400 px-4 py-2.5 rounded-lg text-xs font-mono">
                                [!] {loginError}
                            </div>
                        )}

                        {/* Action Buttons (Merah khas Equator APT) */}
                        <div className="flex flex-col gap-3 mt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-red-700 text-white hover:bg-red-800 font-bold uppercase tracking-wider font-mono text-xs py-2.5 rounded-lg transition-all active:scale-[0.99] disabled:opacity-50"
                            >
                                {isLoading ? "⏳ INITIALIZING..." : "Request Access"}
                            </button>
                            
                            <button
                                type="button"
                                onClick={() => reset()}
                                className="w-full border border-zinc-800 text-gray-400 hover:bg-zinc-900 hover:text-gray-200 font-bold uppercase tracking-wider font-mono text-xs py-2.5 rounded-lg transition-all"
                            >
                                Clear System
                            </button>
                        </div>

                        {/* Footer Link */}
                        <div className="text-center mt-2 border-t border-zinc-900 pt-4">
                            <p className="text-xs font-mono text-gray-500">
                                Unregistered Entity?{" "}
                                <Link to="/register" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                    Register_Here
                                </Link>
                            </p>
                        </div>

                        {/* Kredensial untuk Pengetesan Dosen */}
                        <div className="mt-1 p-2.5 bg-zinc-900/40 border border-zinc-900/60 rounded-lg text-[10px] text-gray-500 font-mono text-center">
                            <p className="text-emerald-500/60 font-bold mb-0.5">TARGET_CREDENTIALS_DEBUG</p>
                            <p>NIM: 24090033 | PAS: admin123</p>
                        </div>
                    </form>
                </div>

                {/* Footer Event */}
                <div className="text-center mt-8 text-[10px] font-mono text-gray-600 tracking-wider">
                    <p>© 2026 INVOFEST // INFORMATICS VOCATIONAL FESTIVAL</p>
                </div>

            </div>
        </div>
    );
};