import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormData {
    email: string;
    password: string;
}

const loginSchema = z.object({
    email: z.string().email("Format email tidak valid").min(1, "Email wajib diisi"),
    password: z.string().min(1, "Password wajib diisi")
});

// Input Component sederhana
    const Input = ({ label, name, register, error, type = "text", placeholder }: any) => (
    <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700 text-sm">{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-700 ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
        />
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
);

// PasswordInput Component
    const PasswordInput = ({ label, name, register, error }: any) => {
    const [show, setShow] = useState(false);
    return (
        <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700 text-sm">{label}</label>
        <div className="relative">
            <input
            type={show ? "text" : "password"}
            {...register(name)}
            className={`border rounded-lg px-4 py-2 w-full pr-24 focus:outline-none focus:ring-2 focus:ring-red-700 ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
            />
            <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-red-700"
            >
            {show ? "Sembunyikan" : "Lihat"}
            </button>
        </div>
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
        </div>
    );
};

// Button Component
    const Button = ({ label, type = "button", variant = "primary", isLoading = false, onClick }: any) => {
    const variants = {
        primary: "bg-gradient-to-r from-red-800 to-red-700 text-white hover:from-red-900 hover:to-red-800",
        outline: "border-2 border-red-700 text-red-700 hover:bg-red-50"
    };
    return (
        <button
        type={type}
        disabled={isLoading}
        onClick={onClick}
        className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${variants[variant]} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
        {isLoading ? "⏳ Memproses..." : label}
        </button>
    );
};

export const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(""); 

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setLoginError("");
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulasi login (demo: email: admin@invofest.com, password: admin123)
        if (data.email === "admin@invofest.com" && data.password === "admin123") {
        console.log("Login berhasil:", data);
        alert("✅ Login berhasil! Menuju dashboard admin...");
        navigate("/dashboard");
        reset();
        } else {
        setLoginError("Email atau password salah!");
        }
        
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-red-50 py-10 px-4">
        <div className="w-full max-w-md">
            <div className="text-center mb-8">
            <div className="inline-block w-20 h-2 bg-[#802B44] rounded-full mb-4"></div>
            <h1 className="text-3xl font-bold text-[#802B44]">
                Login
            </h1>
            <p className="text-gray-500 mt-2">Masuk ke akun Invofest Anda</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <Input
                label="Email"
                name="email"
                register={register}
                error={errors.email?.message}
                type="email"
                placeholder="admin@invofest.com"
                />

                <PasswordInput
                label="Password"
                name="password"
                register={register}
                error={errors.password?.message}
                />

                {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                    ❌ {loginError}
                </div>
                )}

                <div className="flex flex-col gap-3 mt-2">
                <Button 
                    type="submit" 
                    label="Login" 
                    variant="primary"
                    isLoading={isLoading}
                />
                <Button 
                    type="button" 
                    label="Reset" 
                    variant="outline"
                    onClick={() => reset()}
                />
                </div>

                <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                    Belum punya akun?{" "}
                    <Link to="/register" className="text-red-600 hover:text-red-700 font-semibold">
                    Daftar di sini
                    </Link>
                </p>
                </div>

                {/* Demo credentials */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-500 text-center">
                <p>Demo Login:</p>
                <p>Email: admin@invofest.com | Password: admin123</p>
                </div>
            </form>
            </div>

            <div className="text-center mt-6 text-xs text-gray-400">
            <p>© 2026 Invofest - Informatics Vocational Festival</p>
            </div>
        </div>
        </div>
    );
};