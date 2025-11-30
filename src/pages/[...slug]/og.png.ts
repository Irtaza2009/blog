import fs from 'fs/promises';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import { createOGImage } from '../../components/og/image';

// Load font using fs
let fontData: Buffer;
try {
  fontData = await fs.readFile(`${process.cwd()}/public/fonts/Outfit-SemiBold.ttf`);
  console.log('Font loaded successfully');
} catch (error) {
  console.error('Error loading font:', error);
  const message = error instanceof Error ? error.message : String(error);
  throw new Error(`Failed to load font: ${message}`);
}

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  
  const posts = await getCollection('blog');
  const post = posts.find((post) => post.id === slug);
  
  if (!post) {
    return new Response('Post not found', { status: 404 });
  }

  try {
    console.log('Generating OG image for:', post.data.title);
    
    const element = createOGImage(post);
    const svg = await satori(element, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Outfit',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    });

    const png = await sharp(Buffer.from(svg))
      .png()
      .toBuffer();

    return new Response(Uint8Array.from(png), {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    const message = error instanceof Error ? error.message : String(error);
    return new Response(`Failed to generate image: ${message}`, { status: 500 });
  }
};

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
  }));
}