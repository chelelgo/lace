import { useEffect, useRef } from 'react';

interface InstagramEmbedProps {
  postUrl: string;
}

const InstagramEmbed = ({ postUrl }: InstagramEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        (window as any).instgrm?.Embeds?.process();
      };
    } else {
      (window as any).instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <div ref={containerRef} className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned={false}
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: 'transparent',
          border: 0,
          margin: 0,
          padding: 0,
          width: '100%',
          maxWidth: '100%',
          minWidth: '100%',
        }}
      />
    </div>
  );
};

export default InstagramEmbed;
