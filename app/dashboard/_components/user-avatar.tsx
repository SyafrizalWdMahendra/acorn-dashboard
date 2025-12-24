import React from "react";

export default function UserAvatar({ src, alt, size = "md" }: any) {
  const sizeClasses = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses} rounded-full object-cover`}
    />
  );
}
