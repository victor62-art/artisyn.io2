"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, ChevronUp, ChevronDown, ImageIcon } from "lucide-react";

interface MediaItem {
  id: string;
  file: File;
  previewUrl: string;
  name: string;
}

interface UploadProgress {
  fileName: string;
  progress: number;
}

export function PortfolioMediaManager() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [uploading, setUploading] = useState<UploadProgress[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Upload ────────────────────────────────────────────────────────────────

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    files.forEach((file) => simulateUpload(file));

    // Reset input so the same file can be re-selected if needed
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const simulateUpload = (file: File) => {
    const fileName = file.name;

    // Add to uploading state
    setUploading((prev) => [...prev, { fileName, progress: 0 }]);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 10;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // Move from uploading to mediaItems
        const previewUrl = URL.createObjectURL(file);
        const newItem: MediaItem = {
          id: `${Date.now()}-${Math.random()}`,
          file,
          previewUrl,
          name: fileName,
        };

        setMediaItems((prev) => [...prev, newItem]);
        setUploading((prev) => prev.filter((u) => u.fileName !== fileName));
      } else {
        setUploading((prev) =>
          prev.map((u) =>
            u.fileName === fileName ? { ...u, progress } : u
          )
        );
      }
    }, 200);
  };

  // ── Remove ────────────────────────────────────────────────────────────────

  const handleRemove = (id: string) => {
    setMediaItems((prev) => {
      const item = prev.find((m) => m.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((m) => m.id !== id);
    });
  };

  // ── Reorder ───────────────────────────────────────────────────────────────

  const moveItem = (index: number, direction: "up" | "down") => {
    const newItems = [...mediaItems];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setMediaItems(newItems);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Portfolio Media</h2>
        <p className="text-sm text-gray-500 mt-1">
          Upload photos or videos of your work. Drag to reorder how they appear on your profile.
        </p>
      </div>

      {/* Upload Area */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#605DEC] hover:bg-[#F4F3FE] transition-colors duration-200"
      >
        <div className="w-12 h-12 rounded-full bg-[#F4F3FE] flex items-center justify-center">
          <Upload className="w-5 h-5 text-[#605DEC]" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900">
            Click to upload media
          </p>
          <p className="text-xs text-gray-500 mt-1">
            PNG, JPG, GIF, MP4 up to 10MB
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="border-[#605DEC] text-[#605DEC] hover:bg-[#F4F3FE] hover:text-[#605DEC]"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
        >
          Select Files
        </Button>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Upload Progress */}
      {uploading.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">Uploading...</h3>
          {uploading.map((u) => (
            <div key={u.fileName} className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-700 truncate max-w-[80%]">{u.fileName}</p>
                <span className="text-xs font-medium text-[#605DEC]">{u.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className="bg-[#605DEC] h-1.5 rounded-full transition-all duration-200"
                  style={{ width: `${u.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Media Grid */}
      {mediaItems.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">
            Uploaded Media ({mediaItems.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaItems.map((item, index) => (
              <div
                key={item.id}
                className="relative bg-white border border-gray-200 rounded-xl overflow-hidden group shadow-sm"
              >
                {/* Preview */}
                <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                  {item.file.type.startsWith("image/") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.previewUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <ImageIcon className="w-8 h-8" />
                      <span className="text-xs">Video</span>
                    </div>
                  )}
                </div>

                {/* File name */}
                <div className="px-3 py-2 border-t border-gray-100">
                  <p className="text-xs text-gray-600 truncate">{item.name}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:bg-red-600"
                  aria-label="Remove media"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                {/* Reorder Buttons */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <button
                    onClick={() => moveItem(index, "up")}
                    disabled={index === 0}
                    className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Move up"
                  >
                    <ChevronUp className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => moveItem(index, "down")}
                    disabled={index === mediaItems.length - 1}
                    className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Move down"
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                </div>

                {/* Position Badge */}
                <div className="absolute bottom-10 right-2">
                  <span className="text-xs bg-black/50 text-white px-1.5 py-0.5 rounded">
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {mediaItems.length === 0 && uploading.length === 0 && (
        <div className="text-center py-6">
          <ImageIcon className="w-10 h-10 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-500">No media uploaded yet.</p>
          <p className="text-xs text-gray-400 mt-1">
            Upload your first photo or video to get started.
          </p>
        </div>
      )}
    </div>
  );
}
