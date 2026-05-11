import React from "react";

// Catatan:
// Halaman edit tidak diregistrasikan di router App.tsx.
// User request: cukup halaman index + create.
// Jadi file ini dibuat minimal agar tidak mengganggu build.

export default function CategoryEdit() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Halaman Edit Kategori</h1>
      <p className="text-gray-600">
        Halaman ini belum diaktifkan karena route /dashboard/kategori/:id/edit tidak ada.
      </p>
    </div>
  );
}

