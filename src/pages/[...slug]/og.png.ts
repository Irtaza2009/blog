import fs from 'fs/promises';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import OGImage from '../../components/og/image';

// Load font
const fontData = await fs.readFile("./src/assets/fonts/0xProtoNerdFont-Regular.ttf");

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  
  const posts = await getCollection('blog');
  const post = posts.find((post) => post.id === slug);
  
  if (!post) {
    return new Response('Post not found', { status: 404 });
  }

  try {
    // Use the OGImage component directly
    const svg = await satori(OGImage(post), {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: '0xProto',
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
    return new Response('Failed to generate image', { status: 500 });
  }
};

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
  }));
}