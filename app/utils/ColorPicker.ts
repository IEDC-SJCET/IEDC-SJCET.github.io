'use client'
// Utility to extract a dominant-ish color from an image on the client without using React hooks.
// Returned value matches the previous API: Promise<{ dominantColor: string | null }>

type Result = { dominantColor: string | null };

export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(new Error('Failed to load image'));
        img.src = src;
    });
}

export function rgbToHex(r: number, g: number, b: number) {
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default async function getColorFromImage({ imageUrl }: { imageUrl: string }): Promise<Result> {
    try {
        // Normalize root-relative URLs (e.g. '/img.jpg') to absolute URLs so
        // Image() resolves correctly regardless of current document path.
        // This function runs in the browser (`'use client'`), so `location` is available.
        let src = imageUrl;
        if (typeof src === 'string' && src.startsWith('/')) {
            src = `${location.origin}${src}`;
        }

    // simple in-memory cache to avoid repeated work for the same image
    const cacheKey = src;
    if (imageColorCache.has(cacheKey)) return imageColorCache.get(cacheKey)!;

        const img = await loadImage(src);

        // downscale for performance
        const maxSize = 100;
        const canvas = document.createElement('canvas');
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        canvas.width = Math.max(1, Math.floor(img.width * scale));
        canvas.height = Math.max(1, Math.floor(img.height * scale));
        const ctx = canvas.getContext('2d');
        if (!ctx) return { dominantColor: null };

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        // compute simple average color
        let r = 0,
            g = 0,
            b = 0,
            count = 0;
        for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3];
            // ignore fully transparent pixels
            if (alpha === 0) continue;
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
        }

        if (count === 0) return { dominantColor: null };

        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);

    const result = { dominantColor: rgbToHex(r, g, b) } as Result;
    imageColorCache.set(cacheKey, result);
    return result;
    } catch (err) {
        return { dominantColor: null };
    }
}

// module-scoped cache
const imageColorCache: Map<string, Result> = new Map();