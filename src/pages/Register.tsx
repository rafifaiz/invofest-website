import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  eventCategory: string;
  bio: string;
}

const registerSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap wajib diisi"),
  email: z.string().email("Format email tidak valid").min(1, "Email wajib diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  eventCategory: z.string().min(1, "Pilih kategori event"),
  bio: z.string().min(10, "Bio minimal 10 karakter").max(200, "Bio maksimal 200 karakter")
});

// Cyber Input Component
const Input = ({ label, name, register, error, type = "text", placeholder }: any) => (
  <div className="flex flex-col gap-1.5 font-mono">
    <label className="text-gray-400 text-xs tracking-wider">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all text-sm placeholder-zinc-600 ${
        error ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">! {error}</p>}
  </div>
);

// Cyber PasswordInput Component
const PasswordInput = ({ label, name, register, error }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1.5 font-mono">
      <label className="text-gray-400 text-xs tracking-wider">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="••••••••"
          {...register(name)}
          className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all text-sm pr-20 placeholder-zinc-600 ${
            error ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
          }`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-emerald-400 font-bold hover:text-emerald-300 uppercase tracking-wider"
        >
          {show ? "Hide" : "View"}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">! {error}</p>}
    </div>
  );
};

// Cyber Select Component
const Select = ({ label, name, register, error, options }: any) => (
  <div className="flex flex-col gap-1.5 font-mono">
    <label className="text-gray-400 text-xs tracking-wider">{label}</label>
    <select
      {...register(name)}
      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all text-sm ${
        error ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
      }`}
    >
      <option value="" className="text-zinc-600">-- SELECT_OPERATIONAL_NODE --</option>
      {options.map((opt: any) => (
        <option key={opt.value} value={opt.value} className="bg-zinc-950 text-gray-200">
          {opt.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">! {error}</p>}
  </div>
);

// Cyber Textarea Component
const Textarea = ({ label, name, register, error, placeholder }: any) => (
  <div className="flex flex-col gap-1.5 font-mono">
    <label className="text-gray-400 text-xs tracking-wider">{label}</label>
    <textarea
      {...register(name)}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 border rounded-lg min-h-[90px] focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-zinc-900 text-gray-100 transition-all text-sm resize-none placeholder-zinc-600 ${
        error ? 'border-red-600 focus:ring-red-600' : 'border-zinc-800 focus:border-emerald-500'
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">! {error}</p>}
  </div>
);

// Cyber Button Component
const Button = ({ label, type = "button", variant = "primary", isLoading = false, onClick }: any) => {
  const variants = {
    primary: "bg-red-800 hover:bg-red-900 text-white border border-transparent shadow-lg shadow-red-950/40 active:scale-[0.99]",
    outline: "border border-zinc-800 text-gray-400 hover:bg-zinc-900 hover:text-gray-200"
  };
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={`w-full py-2.5 rounded-lg font-bold font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center ${variants[variant as keyof typeof variants]} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoading ? "⏳ INITIALIZING..." : label}
    </button>
  );
};

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("📝 Cyber Account Formed:", data);
    alert("✅ Registrasi entitas berhasil terintegrasi dengan jaringan Equator APT!");
    setIsLoading(false);
    reset();
  };

  const eventOptions = [
    { label: "SEC_SEMINAR // Main Cyber Security Event", value: "invofest" },
    { label: "WORKSHOP_AI // Machine Learning Operations", value: "ai" },
    { label: "REACT_CONF // Frontend Architecture Core", value: "react" },
    { label: "CTF_COMP // Attack & Defense Tournament", value: "startup" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 select-none">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header - Matches Login Screen Layout */}
        <div className="text-center">
          <div className="inline-block w-20 h-1 bg-emerald-500 rounded-full mb-4 shadow-md shadow-emerald-500/50"></div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-widest font-mono">
            EQUATOR_APT //
          </h1>
          <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase mt-1">
            Create_New_System_Identity
          </p>
        </div>

        {/* Tactical Dark Form Card */}
        <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-900 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            
            <Input
              label="// IDENTITY_FULL_NAME"
              name="fullName"
              register={register}
              error={errors.fullName?.message}
              placeholder="Masukkan nama lengkap Anda"
            />

            <Input
              label="// SECURE_EMAIL_ADDRESS"
              name="email"
              register={register}
              error={errors.email?.message}
              type="email"
              placeholder="ops@domain.com"
            />

            <PasswordInput
              label="// ACCESS_PASSWORD"
              name="password"
              register={register}
              error={errors.password?.message}
            />

            <Select
              label="// TARGET_EVENT_NODE"
              name="eventCategory"
              register={register}
              error={errors.eventCategory?.message}
              options={eventOptions}
            />

            <Textarea
              label="// BIOGRAPHICAL_SUMMARY"
              name="bio"
              register={register}
              error={errors.bio?.message}
              placeholder="Ceritakan sedikit keahlian atau latar belakang Anda..."
            />

            {/* Actions Block */}
            <div className="flex gap-3 pt-4 border-t border-zinc-900/50">
              <Button 
                type="submit" 
                label="Request Access" 
                variant="primary"
                isLoading={isLoading}
              />
              <Button 
                type="button" 
                label="Clear" 
                variant="outline"
                onClick={() => reset()}
              />
            </div>
          </form>
        </div>

        {/* Footer Navigation Link */}
        <div className="text-center font-mono text-xs text-zinc-500">
          <p>
            Already Registered?{" "}
            <Link to="/login" className="text-emerald-400 font-bold hover:underline tracking-wide">
              Login_Here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};