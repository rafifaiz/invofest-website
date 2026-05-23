import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-black">
            {/* Mobile: Maskot kecil di atas */}
            <div className="md:hidden flex justify-center pt-8 pb-2">
                <img 
                    src="https://www.strausscenter.org/wp-content/uploads/Elazari_hacker_square.jpg"
                    alt="Maskot Invofest" 
                    className="w-32 drop-shadow-xl"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Desktop: Gambar Maskot besar di kiri */}
                <div className="hidden md:flex items-center justify-center p-12">
                    <img 
                        src="https://www.strausscenter.org/wp-content/uploads/Elazari_hacker_square.jpg"
                        alt="Maskot Invofest" 
                        className="max-w-md drop-shadow-2xl"
                    />
                </div>

                {/* Form Area */}
                <div className="flex items-center justify-center p-4 md:p-6">
                    <div className="w-full max-w-md">
                        <Outlet /> 
                    </div>
                </div>
            </div>
        </div>
    );
}
