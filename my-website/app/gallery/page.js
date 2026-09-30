const photos = [
  { title: "Mountain morning", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85", className: "gallery-tall" },
  { title: "A place to think", src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" },
  { title: "City in motion", src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85" },
  { title: "Afternoon light", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85" },
  { title: "Green pause", src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85", className: "gallery-tall" },
  { title: "The long way home", src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85" },
];
export default function GalleryPage() {
  return <main className="page-shell"><div className="gallery-heading"><header className="page-heading"><p className="eyebrow">04 / The things I notice</p><h1>A photo <em>gallery.</em></h1><p>Small moments, places, and colors that caught my eye along the way.</p></header><span className="gallery-count">A FEW FAVORITES · 2026</span></div><section className="gallery-grid" aria-label="Photo gallery">{photos.map((photo) => <figure className={`gallery-item ${photo.className || ""}`} key={photo.title} style={{ "--photo": `url("${photo.src}")` }}><figcaption>{photo.title}</figcaption></figure>)}</section></main>;
}