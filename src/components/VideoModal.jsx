import { useEffect, useRef } from "react";
import Icon from "./Icon";

/* Lightbox player. `src` is any embeddable URL — Google Drive /preview,
   YouTube /embed, or Vimeo. Rendering is skipped entirely when src is falsy. */
export default function VideoModal({ src, title, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!src) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="video-modal">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close video"
          ref={closeRef}
        >
          <Icon name="x" size={16} />
        </button>
        <div className="video-frame">
          <iframe
            src={src}
            title={title}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        </div>
        <p className="video-title">{title}</p>
      </div>
    </div>
  );
}
